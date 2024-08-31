require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers/");
const sequelize = require("./config/connection");


const app = express();
const hbs = exphbs.create();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  },
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: sequelize,
   }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));
app.use("/utils", express.static(path.join(__dirname, "utils")));


app.use(routes);






sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(`Server is listening on http://localhost:${PORT}`)
    );
  });
-- Drop the database if it exists
DROP DATABASE IF EXISTS techBlog_db;

-- Create the database
CREATE DATABASE techBlog_db;

-- Connect to the new database
\c techBlog_db;

-- Create the users table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
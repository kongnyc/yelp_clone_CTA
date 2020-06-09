-- DROP DATABASE IF EXISTS yelp_clone_db;
-- CREATE DATABASE yelp_clone_db;
-- \c yelp_clone_db;

DROP TABLE if EXISTS Stores;
DROP TABLE if EXISTS Types;
DROP TABLE if EXISTS Categories;
DROP TABLE if EXISTS Users;
DROP TABLE if EXISTS Posts;

CREATE TABLE Stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE,
    address VARCHAR
);

CREATE TABLE Types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    store_id INT REFERENCES Stores(id),
    type_id INT REFERENCES Types(id),
    CONSTRAINT UC_Categor UNIQUE (store_id, type_id)
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR UNIQUE,
    password Text
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    store_id INT REFERENCES Stores(id) ON DELETE CASCADE,
    content TEXT,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    -- time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



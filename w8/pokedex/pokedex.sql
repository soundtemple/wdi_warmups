CREATE DATABASE pokedex;


CREATE TABLE pokemon (
  id SERIAL4 PRIMARY KEY,
  species VARCHAR(300),
  nickname VARCHAR(400),
  level VARCHAR(100)
);

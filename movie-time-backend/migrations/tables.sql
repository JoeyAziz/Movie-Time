DROP DATABASE IF EXISTS movie_time;

CREATE DATABASE IF NOT EXISTS movie_time;

USE movie_time;

CREATE TABLE IF NOT EXISTS moviedb_genres (
    added_id BIGINT AUTO_INCREMENT,
    original_id INT NOT NULL,
    name VARCHAR(25) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX uidx_moviedb_genres_original_id (original_id),
    PRIMARY KEY (added_id)
);

CREATE TABLE IF NOT EXISTS moviedb_movies (
    added_id BIGINT AUTO_INCREMENT,
    original_id BIGINT NOT NULL,
    genre_original_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    released_date VARCHAR(20) NOT NULL,
    cover_url VARCHAR(512) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (genre_original_id) REFERENCES moviedb_genres (original_id),
    UNIQUE INDEX uidx_moviedb_movies_original_id (original_id),
    PRIMARY KEY (added_id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE INDEX uidx_users_username (username),
    PRIMARY KEY (id)
);
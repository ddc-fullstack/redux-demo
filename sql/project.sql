
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;


CREATE TABLE user(
                         userId BINARY(16) NOT NULL,
                         email VARCHAR(128) NOT NULL,
                         name CHAR(64) NOT NULL,
                         phone VARCHAR(32) NOT NULL,
                         username VARCHAR(32) NOT NULL,
                         website VARCHAR(32) NOT NULL,
                         PRIMARY KEY(userId)
);
CREATE TABLE post (
                       postId BINARY(16) NOT NULL,
                       postUserId BINARY(16) NOT NULL,
                       body VARCHAR(512) NOT NULL,
                       title VARCHAR(256),
                       INDEX(postUserId),
                       FOREIGN KEY(postUserId) REFERENCES user(userId),
                       PRIMARY KEY(postId)
);


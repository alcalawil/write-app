CREATE TABLE IF NOT EXISTS `users` (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `writes` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL,
    text TEXT NOT NULL,
    INDEX (userId),
    FOREIGN KEY (userId) 
    REFERENCES users (id)
);

ALTER TABLE `writes` ADD COLUMN text text NOT NULL;

INSERT INTO `users` (id, name) VALUES (1, 'Wil')

INSERT INTO `writes` (userId, text) VALUES (1, 'I fell great')
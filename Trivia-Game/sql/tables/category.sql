-- Use database.
use app1;

-- Create table.
CREATE TABLE category (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(35) NOT NULL,
    PRIMARY KEY (id)
);

-- Create Index.
CREATE INDEX idx_category_id ON category(id);


-- Insert Data.
INSERT INTO category(name) VALUES ("Football");
INSERT INTO category(name) VALUES ("Baseball");
INSERT INTO category(name) VALUES ("Hockey");
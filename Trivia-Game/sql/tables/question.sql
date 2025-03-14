-- Use database.
use app1;

-- Create table.
CREATE TABLE question(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(95) NOT NULL,
    choice1 VARCHAR(35) NOT NULL,
    choice2 VARCHAR(35) NOT NULL,
    choice3 VARCHAR(35) NOT NULL,
    choice4 VARCHAR(35) NOT NULL,
    answer INT NOT NULL,
    category INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (category) REFERENCES category(id)
);


-- Create Index.
CREATE INDEX idx_question_id ON question(id);


-- Insert Data.
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("What pick was Tom Brady drafted?", "157", "231", "199", "165", 3, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which team has never played in a Super Bowl?", "Chargers", "Lions", "Colts", "Jets", 2, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who holds the record for the most career passing touchdowns in the NFL?", "Drew Brees", "Brett Favre", "Peyton Manning", "Tom Brady", 4, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which player was nicknamed The Fridge?", "B.J. Raji", "Aaron Gibson", "William Perry", "Vince Wilfork", 3, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who holds the record for the longest field goal in NFL history?", "Justin Tucker", "Matt Prater", "Tom Dempsey", "Adam Vinatieri", 2, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who was the first player to throw for 4,000 yards?", "Joe Namath", "Johnny Unitas", "Bart Starr", "Dan Marino", 1, 1);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("What player won the NFL MVP and Super Bowl MVP in the same season?", "Patrick Mahomes", "Tom Brady", "Kurt Warner", "Peyton Manning", 1, 1);

INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who holds the record for the most career home runs in Major League Baseball?", "Babe Ruth", "Hank Aaron", "Barry Bonds", "Alex Rodriguez", 3, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which team won the World Series in 2018?", "New York Yankees", "Boston Red Sox", "Los Angeles Dodgers", "Houston Astros", 2, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who was the first player to reach 3,000 hits in Major League Baseball?", "Ty Cobb", "Honus Wagner", "Pete Rose", "Hank Aaron", 1, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which MLB player is known for his nickname 'The Iron Man'?", "Lou Gehrig", "Cal Ripken Jr.", "Derek Jeter", "Stan Musial", 2, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which MLB player holds the record for the most career strikeouts as a batter?", "Reggie Jackson", "Adam Dunn", "Jim Thome", "Sammy Sosa", 1, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who is the only pitcher in MLB history to have thrown a no-hitter in both the American League and the National League?", "Nolan Ryan", "Randy Johnson", "Hideo Nomo", "Cy Young", 3, 2);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which MLB team was the first to win back-to-back World Series titles in the modern era (1900 and later)?", " New York Yankees", "Boston Red Sox", "Philadelphia Athletics", "Chicago Cubs", 4, 2);

INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which player holds the record for the most career points in NHL history?", "Wayne Gretzky", "Mario Lemieux", "Gordie Howe", "Sidney Crosby", 1, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who was the first overall pick in the 2005 NHL Draft?", "Alexander Ovechkin", "Sidney Crosby", "Patrick Kane", "Connor McDavid", 2, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which NHL team has won the most Stanley Cup championships?", "Edmonton Oilers", "Detroit Red Wings", "Toronto Maple Leafs", "Montreal Canadiens", 4, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which NHL team has won the most Presidents' Trophies (most points in the regular season)?", "Detroit Red Wings", "Boston Bruins", "Washington Capitals", "Tampa Bay Lightning", 3, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which goalie holds the record for the most career shutouts in NHL history?", "Patrick Roy", "Martin Brodeur", "Jacques Plante", "Dominik Hasek", 2, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Which NHL player holds the record for the longest point streak in a single season?", "Mario Lemieux", "Wayne Gretzky", "Jaromir Jagr", "Connor McDavid", 1, 3);
INSERT INTO question(title, choice1, choice2, choice3, choice4, answer, category) VALUES ("Who was the first goalie to score a goal by shooting the puck into the opponent's net?", "Ron Hextall", "Martin Brodeur", "Dominik Hasek", "Grant Fuhr", 1, 3);


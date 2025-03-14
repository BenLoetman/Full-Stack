-- Use database.
use app1;


-- Create stored procedure.
delimiter //
CREATE PROCEDURE getQuestion(IN ID int)
BEGIN
    SELECT * FROM question WHERE category = ID ORDER BY RAND() LIMIT 5;
END //
delimiter ;
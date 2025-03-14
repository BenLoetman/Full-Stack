-- Use database.
use app1;


-- Create stored procedure. 
delimiter //
CREATE PROCEDURE getCategory()
BEGIN
    SELECT * FROM category;
END //
delimiter ;
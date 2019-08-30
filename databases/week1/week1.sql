-- first week homework creating database and select queries
-- questions:
-- 1 Find out how many tasks are in the task table
-- 2 Find out how many tasks in the task table do not have a valid due date
-- 3 Find all the tasks that are marked as done
-- 4 Find all the tasks that are not marked as done
-- 5 Get all the tasks, sorted with the most recently created first
-- 6 Get the single most recently created task
-- 7 Get the title and due date of all tasks where the title or description contains database
-- 8 Get the title and status (as text) of all tasks
-- 9 Get the name of each status, along with a count of how many tasks have that status
-- 10 Get the names of all statuses, sorted by the status with most tasks first
-- solutions:
-- (1)
SELECT count(id) 
FROM task;  
-- (2)
SELECT count(id) 
FROM task 
WHERE due_date IS NULL; 
-- (3)
SELECT * 
FROM task 
WHERE status_id=3;
-- (4)
SELECT * 
FROM task 
WHERE NOT status_id = 3;
-- (5)
SELECT * 
FROM task 
ORDER BY created DESC;
-- (6)
SELECT * 
FROM task 
ORDER BY created DESC LIMIT 1;
-- (7)
SELECT * 
FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- (8)
SELECT task.title, status.name 
FROM task 
INNER JOIN status ON task.status_id = status.id ;
-- (9)
SELECT status.name, count(*) AS amount
FROM task 
INNER JOIN status ON task.status_id = status.id
GROUP BY task.status_id;
-- (10)
SELECT status.name, count(*) AS amount
FROM task 
INNER JOIN status ON task.status_id = status.id
GROUP BY task.status_id
ORDER BY AMOUNT DESC;
SELECT COUNT(NAME) 
FROM students
WHERE cohort_id <= 3; -- or we can use WHERE cohort_id IN (1,2,3);
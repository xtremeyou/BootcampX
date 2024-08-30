SELECT assignments.day, count(assignments.chapter) as total_assignments
FROM assignments
GROUP BY assignments.day
HAVING count(assignments.chapter) >= 10
ORDER BY day ASC;
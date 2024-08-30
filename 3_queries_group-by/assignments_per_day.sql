SELECT assignments.day, count(assignments.chapter) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY day ASC;
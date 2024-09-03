

const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
  port: 5432
});


pool.query(
    `
    SELECT DISTINCT
    teachers.name AS teacher,
    cohorts.name AS cohort
    FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
    ORDER BY teacher;
    `
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.cohort}: ${user.teacher}`
      )
    })
  })
  .catch((err) => console.log("query error", err.stack));
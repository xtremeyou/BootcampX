
const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
  port: 5432
});

 const queryString = 
  `
    SELECT DISTINCT
    teachers.name AS teacher,
    cohorts.name AS cohort
    FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name LIKE $1
    ORDER BY teacher
    LIMIT $2;
    `;
    
    const cohortName = process.argv[2];
    const limit = process.argv[3] || 5;
    const values = [`%${cohortName}%`, limit]

    pool.query(queryString, values)
    .then((res) => {
      res.rows.forEach((user) => {
        console.log(
          `${user.cohort}: ${user.teacher}`
        )
      })
    })
    .catch((err) => console.log("query error", err.stack));
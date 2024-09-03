const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
  port: 5432
});


pool 

  .query (
    `
    SELECT students.id, students.name, cohorts.name as cohort
    FROM students
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name LIKE '%${process.argv[2]}%'
    LIMIT ${process.argv[3] || 5};
    `
  )
  .then ((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`
      )
    })
  })
  .catch((err) => console.log("query error", err.stack));
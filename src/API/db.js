import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Porcocornio1020",
    database: "crud"
})
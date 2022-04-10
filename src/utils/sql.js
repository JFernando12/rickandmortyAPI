const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "characters",
    socketPath: '/var/run/mysqld/mysqld.sock'
})

const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log("Conected");
    })
}

const add = (name, specie, status, img_url) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO personalized (name, specie, status, img_url, id) VALUES ("${name}", "${specie}", "${status}", "${img_url}" ,${null})`
        connection.query(sql, function(err, row, fields) {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

module.exports = {
    add: add
}
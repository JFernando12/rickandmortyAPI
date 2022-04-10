const mysql = require("mysql");
const { resolve } = require("path");

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

const showCharacter = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM personalized`
        connection.query(sql, function(err, row, fields){
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const addCharacter = (name, specie, status, img_url) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO personalized (name, specie, status, img_url, id) VALUES ("${name}", "${specie}", "${status}", "${img_url}" ,${null})`
        connection.query(sql, function(err, row, fields) {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const deleteCharacter = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM personalized WHERE id=${id}`;
        connection.query(sql, function(err, row, fields){
            (err)
            ? reject(err)
            : reject(row)
        })
    })
}

module.exports = {
    addCharacter: addCharacter,
    deleteCharacter: deleteCharacter,
    showCharacter: showCharacter
}
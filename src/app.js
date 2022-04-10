const express = require("express");
const morgan =require("morgan");
const path = require("path");
var bodyParser = require('body-parser');

const app = express();

//Setting

app.set("port", 3000);
app.set("AppName", "Rick and Morty API");
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//MiddleWare
app.use(morgan("dev"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(require("./routes/index"));
app.use("/personalized", require("./routes/personzalized"))

//Statics
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log("Server on port 3000");
})

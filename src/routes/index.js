const { Router } = require("express");
const router = Router();
const fetchData = require("../utils/fetchData");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/"

router.get("/", (req, res) => {
    res.render("index.ejs");
})

router.get("/personaje", async(req, res) => {
    const data = await(fetchData(API));
    res.render("pages/characters.ejs", {data: data.results});
})


module.exports = router;
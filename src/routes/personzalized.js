const express = require("express");
const { showCharacter } = require("../utils/sql");
const add = require ("../utils/sql");
const router = express.Router();

router.get("/", async(req, res) => {
    const results = await(showCharacter());
    console.log(results);
    res.render("pages/characters", {data: results, title: "Personalized"});
})

router.get("/add", (req, res) => {
    res.render("pages/add")
})

router.post("/add", async(req, res) => {
    const { name, specie, status, img_url } = req.body;
    const character = {
        name, specie, status, img_url
    }
    console.log(character);
    await add.addCharacter(character.name, character.specie, character.status, character.img_url)
    res.send("Listo")
})

router.get("/modify", async(req, res) => {
    results = await(showCharacter());
    res.render("pages/modify", {data: results, title: "Modify"});
})

module.exports = router;
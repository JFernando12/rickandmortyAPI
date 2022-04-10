const express = require("express");
const add = require ("../utils/sql");
const router = express.Router();

router.get("/add", (req, res) => {
    res.render("pages/add")
})

router.post("/add", async(req, res) => {
    const { name, specie, status, img_url } = req.body;
    const character = {
        name, specie, status, img_url
    }
    console.log(character);
    await add.add(character.name, character.specie, character.status, character.img_url)
    res.send("Listo")
})

module.exports = router;
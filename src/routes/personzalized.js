const express = require("express");
const { showCharacter, deleteCharacter, addCharacter, selectCharacter } = require("../utils/sql");
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
    await addCharacter(character.name, character.specie, character.status, character.img_url)
    res.redirect("/personalized")
})

router.get("/modify", async(req, res) => {
    results = await(showCharacter());
    res.render("pages/modify", {data: results, title: "Modify"});
})

router.get("/delete/:id", async(req, res) => {
    await(deleteCharacter(req.params.id));
    console.log(req.params.id)
    res.redirect("/personalized/modify")
})

router.get("/edit/:id", async(req, res) => {
    const character = await(selectCharacter(req.params.id));
    console.log(character)
})

module.exports = router;
const { Router } = require("express");
const { route } = require("express/lib/application");
const router = Router();
const fetchData = require("../utils/fetchData");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const rickandmortyAPI = "https://rickandmortyapi.com/api/character/";
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

router.get("/", (req, res) => {
    res.render("pages/cover.ejs");
})

router.get("/rickandmorty", async(req, res) => {
    const data = await(fetchData(rickandmortyAPI));
    console.log(data)
    res.render("pages/characters.ejs", {data: data.results, title: "Rick and Morty"});
})

router.get("/pokemon", async(req, res) => {
    const data = await(fetchData(pokemonAPI));
    console.log(data);
    const count = data.results.length;
    console.log(count)
    let results = [];
    for (let i=0; i < count; i++) {
        let namePokemon = data.results[i].name;
        let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i+1) +".png"
    
        let pokemon = {
            name: namePokemon,
            species: "no hay",
            status: "alive",
            image : img
        }
        results.push(pokemon);
    }
    res.render("pages/characters.ejs", {data: results, title: "Pokemon"});
})


module.exports = router;
const request = require("request")
const dotenv = require("dotenv").config()

const API_KEY = "d2b23cb39afec605254536f028a059cd"

const argumento = process.argv[2]

const opciones = {
    url: `http://api.openweathermap.org/data/2.5/weather?q=${argumento}&units=metric&appid=${API_KEY}`,
    method: "GET",
    json: true
}

request(opciones, (error, res, body) => {
    console.log(`[PAIS/CIUDAD: ${argumento}] La temperatura actual es: ${body.main.temp}`)
})
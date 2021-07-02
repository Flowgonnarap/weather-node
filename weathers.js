// Made by Flow ^-^

const ps = require("prompt-sync");
const weather = require('weather-js');
const prompt = ps();
console.log("\n\nHey, this will get the weather & other data from your location!")
let country = prompt("Please input your country:    ");
let city = prompt("Please input your city:    ");
let temperatureChoice = prompt("Please type your temperature choice('F' or 'C'):    ").toUpperCase();




weather.find({search: `${city}, ${country}`, degreeType: `${temperatureChoice}`}, function(err, result) {
    if(err) console.log(err);
    let location = result[0].location.name; //works
    let skytoday = result[1].current.skytext; 
    let date = result[1].current.date
    let temperature = result[1].current.temperature;
    let windspeed = result[1].current.winddisplay;
    let day = result[1].current.day;
    console.log(`\nHello! The sky is ${skytoday} today.`)
    console.log(`\nLocation: ${location}.`);
    console.log(`\nDate: ${date}. Today is ${day}.`)
    console.log(`\nTemperature: ${temperature}°${temperatureChoice}.`)
    console.log(`\nWind Speed: ${windspeed}.`)
  });

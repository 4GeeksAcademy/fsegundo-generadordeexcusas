import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
  
  const quien = ['Las personas', 'La comida', 'Los paisajes'];
  const porque = ['son hermosos/as', 'es increible', 'experiencia inolvidable'];
  const lugares = ['en Buenos Aires', 'en Mendoza', 'en La patagonia'];
  
const randomIndexQuien = Math.floor(Math.random() * quien.length );
const randomIndexPorque = Math.floor(Math.random() * porque.length );
const randomIndexLugares = Math.floor(Math.random() * lugares.length );

const excuses = quien[randomIndexQuien] + " " + porque[randomIndexPorque] + " " + lugares [randomIndexLugares];


const myExcuse = document.getElementById('myExcuse');

 myExcuse.innerHTML = excuses
  
};

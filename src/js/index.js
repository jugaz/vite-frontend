
import axios from 'axios'
const json = require("./json/a.json")

axios.get('./json/a.json', {
    responseType: 'json'
    })
    .then(function ({ data }) {
  
        console.log("data",data)


    })
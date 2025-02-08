const axios =  require("axios");
const { CALC_OPTIMATE_ROUTE, optimalPATH, routeFound } = require("./map"); 

const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.json())



app.post("/", async (req, res) => {
    const { points, excludes } = req.body;

    let cords =  await CALC_OPTIMATE_ROUTE(points.map(p => p.reverse()));

    
    res.status(200).json({ cords: cords })
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
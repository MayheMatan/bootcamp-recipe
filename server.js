const express = require("express");
const urllib = require("urllib");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get("/recipes/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (error, response) => {
        const { results } = (JSON.parse(response.toString()));
        res.send(results)
    })
})

const port = 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
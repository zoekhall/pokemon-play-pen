const express = require('express');
const { config } = require('webpack');


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`) );

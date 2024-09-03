const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("este es el proyecto")
});
app.listen(port, () => {
    console.log("puerto en ejecucion")
});
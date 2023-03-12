const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
    counter++;
    const response = {
        counter,
        hostname: os.hostname(),
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to myweb');
})

app.listen(8081, () => {
    console.log('myweb is running at port 8081');
})
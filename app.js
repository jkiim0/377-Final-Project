const express = require('express');
const path = require('path');
const app = express();
//const port = 3000;

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
    //res.sendFile('public/recs.html', {root: __dirname});
});

app.post('/', (req, res) => {
    console.log('hitting api'); // shows in terminal
    res.header('Content-Type', 'application.json');

    const output = {
        output: 'hello world',
    };
    res.send(JSON.stringify(output));
});

module.exports = app;
// app.listen(port, () => {
//     console.log(`express app listening on port: ${port}`);
// })
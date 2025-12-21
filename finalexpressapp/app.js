const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname});
    res.sendFile('public/recs.html', {root: __dirname});
});

app.post('/', (req, res) => {
    console.log('hitting api'); // shows in terminal
    res.header('Content-Type', 'application.json');

    const output = {
        output: 'hello world',
    };
    res.send(JSON.stringify(output));
});

app.listen(port, () => {
    console.log(`express app listening on port: ${port}`);
})
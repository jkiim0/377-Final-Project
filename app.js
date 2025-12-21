const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname});
    res.sendFile('public/recs.html', {root: __dirname});
});

// added to try making sign up connect with back end, but not yet working
// getting a POST 500 error
app.post('/user', async (req, res) => {
    console.log('adding user');
    console.log('requesting body', req.body);

    const {firstName, lastName, email} = req.body;

    if(!isValidEmail(email)){
        console.error(`email: ${email} is invalid`);
        res.statusCode = 400;
        const errorJSON = {
            message: `${email} is not a valid email`
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(errorJSON));
        return;
    };

    const {data, error} = await supabase
    .from('user')
    .insert({
        user_first_name: firstName,
        user_last_name: lastName,
        user_email: email
    })
    .select();

    if(error){
        console.error("error inserting: ", error);
        return res.status(500).json(error);
    }
    return res.json(data);
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
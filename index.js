const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const supabaseClient = require('../../../../../supabaseapp/node_modules/@supabase/supabase-js/src/lib/rest/types/common/common');
const {isValidEmail} = require('@emailcheck/email-validator-js');
const dotenv = require('dotenv/lib/main');

const app = express();
//const port = 3000;
dotenv.config();

app.use(express.json());


app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// initialize supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/users', async (req, res) => {
    console.log('attempting to get all users');

    const {data, error} = await supabase.from('user').select();

    if(error){
        console.log(`error: ${error}`)
        res.statusCode = 500;
        res.send(error);
        return;
    }else{
        res.send(data);
    }
});

app.post('/user', async (req, res) => {
    console.log('adding user');
    console.log('request:', req.body);

    const firstName = req.body.firstName;
    const lateName = req.body.lastName;
    const email = req.body.email;

    if(!isValidEmail(email)){
        console.error(`email: ${email} is invalid`);
        res.statusCode = 400;
        const errorJSON = {
            message: `${email} is not a valid email`
        }
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(errorJSON));
        return;
    }

    const {data, error} = await supabase.from('user').insert({
        user_first_name: firstName,
        user_last_name: lateName,
        user_email: email
    })
    .select();

    if(error){
        console.log(`error: ${error}`)
        res.statusCode = 500;
        res.send(error);
        return;
    }else{
        res.send(data);
    }

    res.send(req.body);
});

module.exports = app;
// app.listen(port, () => {
//     console.log('app is available on port:', port);
// });
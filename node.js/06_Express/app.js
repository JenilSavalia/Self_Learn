const express = require('express')
const app = express();
const port = '80';

app.get('/', (req, res) => {
    res.send('Jay Swaminarayan');
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.post('/about', (req, res) => {
    res.send('about with post request');
});

app.get('/contact', (req, res) => {
    res.send('contact');
});

app.listen(port, () => {
    console.log(`App is on ${port}`)
})
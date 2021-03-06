const PORT = process.env.PORT || 3500;

const express = require('express');
const getAccessToken = require('./authentication');

const app = express();

// routes
app.get('/', (req, res) =>{
    res.send('Welcome to CallmeHoney API');
})
app.get('/access-token', (req, res) =>{
    res.send({
        message: 'Success',
        status: 200,
        token: getAccessToken(req.query.userId)
    });
})

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
});
const PORT = 3500;

const express = require('express');
const getAccessToken = require('./authentication');

const app = express();

// routes
app.get('/access-token', (req, res) =>{
    res.send(getAccessToken());
})

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
});
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../webdevelopmentclass')));

// Sends the main HTML page to the browser
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../webdevelopmentclass/index.html'));
});
//Deals with the form and what users insterted
app.post('/submit-form', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    res.send(`Messsage received from ${name} (${email}): ${message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

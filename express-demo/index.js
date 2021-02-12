const express = require('express');
const app = express();

const models = [
    { "appointmentType" : "OPD", "status" : "active"},
    { "appointmentType" : "INP", "status" : "active"}
];
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/models', (req, res) => {
    res.send(models);
  
});

//const port = process.env.MY_TEST_PORT || 3000;
const port = 8000;
//console.log(process.env.MY_TEST_PORT);
app.listen(port, () => console.log(`Listening on port nO: ${port}`));
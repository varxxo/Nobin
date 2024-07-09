const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const db = require('./db'); 

let corsOptions = { 
  origin : ['http://localhost:3000'], 
} 
 
app.use(cors()) 
 

app.get('/', (req, res) => {
    res.send('Nobin Server');
});

app.get('/dishes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let fs = require('fs');
    let data = fs.readFileSync('./dishes.json', 'utf-8');
    res.send(data);
});

app.get('/dishes1', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        const data = await db.getFromDB(); 
        res.send(data);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch data from the database' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

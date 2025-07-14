const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from App2 on port 5000!'));
app.listen(5000, () => console.log('App2 running on port 5000'));

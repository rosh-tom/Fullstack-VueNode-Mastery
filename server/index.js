require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./routes/todo.routes')(app);

app.listen(port, (req, res) => {
    console.log(`server started at http://localhost:${port}`);
});
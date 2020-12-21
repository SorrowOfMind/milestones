const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({linit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({linit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server up and running on port ${PORT}`);

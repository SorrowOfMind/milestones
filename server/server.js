const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const postsRoutes = require('./routes/postsRoutes');

const app = express();

app.use(bodyParser.json({linit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({linit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`)))
    .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);

const connection = mongoose.connection;
connection.once('open', () => console.group('Connected to MongoDB'));
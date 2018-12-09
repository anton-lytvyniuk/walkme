const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const router = require('./router');

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(8080, async () => {
    console.log('Listening on port 8080!');
});

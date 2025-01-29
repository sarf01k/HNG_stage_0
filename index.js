const express = require('express');
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['*']
};

const port = 3000 || process.env.PORT;

const app = express();

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    res.status(200).json({
        email: 'isaacsarfo2004@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/sarf01k/HNG_stage_0'
    })
});

app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`• server listening on port ${port}`);
});
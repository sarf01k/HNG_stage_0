const express = require('express');

const port = 3000;

const app = express();

app.get('/', async (req, res) => {
    res.status(200).json({
        email: 'isaacsarfo2004@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/sarf01k/HNG_stage_0'
    })
});

app.listen(port, () => {
    console.log(`• server listening on port ${port}`);
});
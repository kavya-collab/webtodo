const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('landing-page'));

app.use('/', express.static('landing-page'));
app.get('/', (req, res) => {
    res.sendFile('./landing-page/index.html', { root: __dirname });
});


app.listen(port, () => console.log(`listening on port ${port}!`));
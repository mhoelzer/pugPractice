const express = require("express");
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

let port = 3000;

app.use("/static", express.static("public"));

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => console.log(`on port ${port}`));
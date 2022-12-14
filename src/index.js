
const engine = require('express-handlebars')
const express = require('express');

const app = express()
const port = 3000
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {

    res.send('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
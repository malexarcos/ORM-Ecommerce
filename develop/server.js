const express = require('express');
const routes = require('./routes');
const db = require('./config/connection.js')

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);
db.sync({
    force: false,
})
.then (() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})




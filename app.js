const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config({ path: "config.env" });
var PORT = process.env.PORT || 4000;

// app.use(express.urlencoded({extended:true}));

// Parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set view template
app.set('view engine', 'ejs');


// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));


// Load routes
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

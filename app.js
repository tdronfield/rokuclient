const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 5000;

// Tell HBS where our views content lives,
// Like how we tell routes where to find index
app.set("views", path.join(__dirname, "public"));
// Use the hbs engine to render everything in views
app.set("views", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})
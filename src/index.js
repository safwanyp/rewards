const express = require("express");
const dotenv = require("dotenv");
const initialize = require("./initialiaze");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

initialize();
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

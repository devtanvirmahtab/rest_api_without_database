const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);


//HOME ROUTE
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//route not found
app.use((req, res, next) => {
    res.status(404).json({ message: "route not Found" });
});

//server error
app.use((error, req, res, next) => {
    res.status(500).json({ message: "route not Found" });
});

module.exports = app;

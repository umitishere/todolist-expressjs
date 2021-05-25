const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    // It has to be in the views folder and has to have .ejs extension (embedded js)
    res.render("list", { kindOfDay: day });

});

app.post("/", (req, res) => {

    let item = req.body.newItem;

    console.log(item);

});

app.listen(3000, () => {
    console.log("Server is running.");
});
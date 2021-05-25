const express = require("express");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    // list.ejs file has to be in the views folder and has to have .ejs extension (embedded js)
    res.render("list", { kindOfDay: day, newListItems: items });

});

app.post("/", (req, res) => {

    let item = req.body.newItem;

    items.push(item);

    // Pass items array to app.get method.
    res.redirect("/");

});

app.listen(3000, () => {
    console.log("Server is running.");
});
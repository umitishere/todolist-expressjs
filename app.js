const express = require("express");
const date = require(__dirname + "/date.js"); // Our date module

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let day = date.getDate();
    // we can also access getDay function by typing date.getDay()

    // list.ejs file has to be in the views folder and has to have .ejs extension (embedded js)
    res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", (req, res) => {

    let item = req.body.newItem;

    if (req.body.list === "Work List") {

        workItems.push(item);
        res.redirect("/work");

    } else {

        items.push(item);
        res.redirect("/");

    }

});

app.get("/work", (req, res) => {

    res.render("list", { listTitle: "Work List", newListItems: workItems });

});


app.listen(3000, () => {
    console.log("Server is running.");
});
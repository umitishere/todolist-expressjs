const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    // It has to be in the views folder and has to have .ejs extension (embedded js)
    res.render("list", {kindOfDay: day});

});

app.listen(3000, () => {
    console.log("Server is running.");
});
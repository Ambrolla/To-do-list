const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
let ejs = require("ejs");
app.set("view engine", "ejs"); //put this line below express const
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.get("/", function (require, response) {
    // let today = new Date();
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // }
    // let day = today.toLocaleDateString("en-US", options); look at date.js file
    let day = date.getDate();
    response.render("list", { listTitle: day, newListItem: items })
})
app.post("/", function (request, response) {
    const item = request.body.newItem;
    if (request.body.list === "Work") {
        workItems.push(item);
        response.redirect("/work");
    } else {
        items.push(item);
        response.redirect("/");
    }

})
app.get("/work", function (request, response) {
    response.render("list", { listTitle: "Work List", newListItem: workItems })
})
app.get("/about", function (request, response) {
    response.render("about");
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000.");
})
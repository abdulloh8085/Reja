console.log('web server ishga tushdi');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) { 
        console.log("ERROR:",  err);
    } else {
        user = JSON.parse(data)
    }
});

// Mongo DB connect 
const db = require("./server").db();


//1 Kirish codelar yoziladi
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2; Session codelar 

//3: views codelar yozamiz
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing code lar yoziladi
// app.get("/hello", function(req, res) {
//     res.end("<h1>Hello World by Lincoln</h1>");
// });
// app.get("/Gift", function(req, res) {
//     res.end("<h1> Siz sovgalar saxifasidasiz!</h1>");
// });

app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;

    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
    console.log(err);
    res.end("something went wrong");
        }
    else { 
        res.end("successfully added!");
      }
    });
});

app.get('/author', (req, res) => {
    res.render("author", { user: user});
}); 

// app.get("/", function (req, res) {
//     res.render("reja");
// });


app.get("/", function (req, res) {
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong!");
        } else {
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;
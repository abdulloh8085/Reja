console.log("web server ishga tushdi");

const express = require("express");
const app = express();
const fs = require("fs");

// Mongo DB connect
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: views
app.set("views", "views");
app.set("view engine", "ejs");

// CREATE
app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;

  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) return res.json({ state: "error" });

    // eski driverda ops bo‘ladi, yangisida insertedId
    res.json({
      _id: data.insertedId,
      reja: new_reja,
    });
  });
});

// DELETE
app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) return res.json({ state: "error" });

      res.json({ state: "success" });
    }
  );
});

// AUTHOR
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// HOME
app.get("/", (req, res) => {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        return res.end("something went wrong!");
      }

      res.render("reja", { items: data });
    });
});

module.exports = app;
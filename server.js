console.log('web server ishga tushdi');
const express = require("express");
const app = express();
const http = require ("http");

//1 Kirish codelar yoziladi
app.use(express.static("public"));
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

app.post("/create-item", (req,res) => {
    console.log(req.body);
    res.json({test: "success!"});
});

app.get("/", function (req, res) {
    res.render("harid");
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}`);
});
const http = require ("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://abdullohim:Jg77PEvsMn6W5aNN@cluster0.ef09ph5.mongodb.net/Reja"; 

mongodb.connect(connectionString, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB Connection succeed!");
      
        module.exports = client;

        const app = require("./app"); 
        const server = http.createServer(app);
        let PORT = 3012;
        server.listen(PORT, function () {
            console.log(
                `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });     
    }
});

const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded( {extend : true}));

app.use(express.static(("public")));
var ms = require("./data");

app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.get("/result", getData);
app.post("/", postData);

function getData(req, res) {
    console.log("getting data");
    res.render("result", {user : " ", summary : " ", book:" ", result: ""});
    //res.write("{\"name\" : \"Edson\"}");
    res.end();
}

function postData (req, res) {
    console.log("Posting Data");
    var user = req.body.user;
    var book = req.body.book;
    var summary = req.body.summary;
    var result = ms.compute(user, book, summary);

    //console.log(req.body.user);
    //console.log(req.body.book);
    //console.log(req.body.summary);

    
    res.render("result", {user : user, summary : summary, book: book, result: result});
}






app.listen(app.get("port"), () => console.log("Server is listening on port "+ app.get("port") ));
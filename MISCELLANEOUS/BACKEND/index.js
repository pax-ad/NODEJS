const express = require("express");
const app = express();
const port = 8000;

app.get("/register", (req,res) => {
    let {user,password} = req.query;
    res.send(`welcome ${user}`);
    //res.send("GET response");
})

app.post("/register", (req,res) => {
    res.send("post response");
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
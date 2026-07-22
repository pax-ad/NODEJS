const express = require("express");
const app = express();
const port = 8000;

//get and post method
app.get("/register", (req,res) => {
    let {user,password} = req.query;
    res.send(`welcome ${user}`);
    //res.send("GET response");
})

//handlling post requests

app.use (express.urlencoded({extended:true}));
app.use(express.json());
app.post("/register", (req,res) => {
    //console.log(req.body);
    let {user,password} =req.body;
    res.send(`post response , welcome ${user}`);
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});



const movieRoute = require("./route/movies.route");
const dbconnect = require("./lib/dB.js")
const express = require("express");

const app=express();

// understanding the data to be passed 
app.use(express.json());
// understand the url structure
app.use(express.urlencoded({extended:true}))
const PORT=6969;
app.get('/',(req,res)=>{
    res.json({msg:"I will catch very soon to master it"})
})

//data model connection
dbconnect();
//middlewares
app.use('/movies',movieRoute)

app.listen(PORT,()=>{
    console.log(`Web server is started Successfully: http://localhost:${PORT}`)
})
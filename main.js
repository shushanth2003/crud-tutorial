const express = require("express");

const app=express();
const PORT=6969;
app.get('/',(req,res)=>{
    res.json({msg:"I will catch very soon to master it"})
})

app.listen(PORT,()=>{
    console.log(`Web server is started Successfully: http://localhost:${PORT}`)
})
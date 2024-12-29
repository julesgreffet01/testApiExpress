const express = require('express');
const dotenv = require('dotenv').config();
const port = 5000;

const app = express();

//middleware (permet de traiter les données de la request)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//toutes les choses dont tu as besoin
app.use("/post", require("./routes/post.routes"));

//lancer le serve
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
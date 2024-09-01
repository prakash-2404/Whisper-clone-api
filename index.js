import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";
app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try {
    const response = await axios.get(`${API_URL}`);
    console.log(response);
    const randSecret = response.data.secret;
    const randUsername = response.data.username;
    res.render("index.ejs", {secret : randSecret, user : randUsername});
    }catch(error){
        res.render("index.ejs", {error : error.response.data});
    }
});

app.listen(port, (req, res)=>{
    console.log(`Server is running on port ${port}`);
});

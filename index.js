/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/11/2022 - 10:35:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/11/2022
    * - Author          : 
    * - Modification    : 
**/
const fs = require("fs/promises");
const express = require("express");
const cors = require ("cors");
const _ = require("lodash");
const {v4: uuid } = require("uuid");


const app = express();

const data =  [
    {
     Ivan:  {
       fullname: " Ivan Doe",
       age: 24,
       dob: "20th May 1998",
       complexion: "chocolate",
       marital_status: "single"
     },
     
     Karen:  {
        occupation: "Software engineer",
        gender: "female",
        dob: "20th May 1998",
        complexion: "chocolate",
        marital_status: "married"
      },
 
 
         Dennis: {
             height: "1.9m",
             age: 28
         }
        }
 ]
app.get("/client", (req, res) => {
    // console.log(getDa.json());
    res.send(data[0]);
    //res.send(JSON.Stringify(data));
});
app.get("/client/Ivan", (req, res) => {
    res.send(data[0].Ivan);
});
app.get("/client/Karen", (req, res) => {
    res.send(data[0].Karen);
});
app.get("/client/Dennis", (req, res) => {
    res.send(data[0].Dennis);
});



app.listen(3000, ()=> console.log("API is running!"));
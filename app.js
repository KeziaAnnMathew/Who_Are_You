const express = require('express');
const app= new express();
const port = 8000;
// const StaffData=require("./modals/staffData");
const cors = require('cors');
var bodyparser= require('body-parser');
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(require('path').join(__dirname,'/public')));
const staffRouter= require('./routes/staffroutes')(app);
app.use('/',staffRouter);
app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
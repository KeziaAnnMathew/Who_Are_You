const express = require('express');
const staffRouter=express.Router();
const StaffData=require("../modals/staffData");

function router(){
    staffRouter.get('/getStaffInfo/:id',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        const id=req.params.id;
        console.log(id)
        StaffData.findOne({rfid:"123456"},(err,doc)=>{
            res.send({doc:doc})
        })
    })
    return staffRouter;
}

module.exports = router;
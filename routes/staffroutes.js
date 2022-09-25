const express = require('express');
const staffRouter=express.Router();
const StaffData=require("../modals/staffData");
const RoomData=require("../modals/roomRecord");
const fs = require('fs');
const path = require('path');

function router(){
    staffRouter.get('/getStaffInfo',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")

        // const readFileLines = filename =>
        // fs.readFileSync(filename)
        // .toString('UTF8')
        // .split('\n');
        // let array = readFileLines('/Users/keziaannmathew/Documents/works/Hack_DFW/textfiles/test.txt');
        // console.log(array[0])
        StaffData.findOne({rfid:"12344444"},(err,doc)=>{
            if(doc){
                var item = {
                    rfid:"12344444",
                    roomid:'testroom',
                    entrytime: Date.now(),
                    exittime: ''
                }
                var record= RoomData(item);
                record.save();
            }
            res.send()
        })
    })

    //fetch the roomdata with the room id and fetch the corresponding rfid
    staffRouter.get('/getlogs',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        const testarr = RoomData.aggregate(
            [
                {   
                    "$project": 
                    {     
                    "roomid": "testroom",  
                    }
                }, 
                { "$lookup": {     
                        "from": "StaffData",     
                        "localField": "rfid",     
                        "foreignField": "rfid",     
                        "as": "staffdata"   
                }}, 
                { "$project": { 
                    "roomid": 1, 
                    "staffdata": { "$arrayElemAt": [ "$countryInfo", 0 ] } 
                }},
                {
                    "$unwind": '$rfid'
                }
            ]
        )
        console.log(testarr)
    })

    return staffRouter;
}

module.exports = router;
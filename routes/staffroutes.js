const express = require('express');
const staffRouter=express.Router();
// const Readline = require("@serialport/parser-readline");
const { ReadlineParser } = require('@serialport/parser-readline')
// const Readline = require("@serialport/parser-readline");
const { SerialPort } = require('serialport');
const { parse } = require("path");
const { default: test } = require("node:test");
const StaffData=require("../modals/staffData");
const RoomData=require("../modals/roomRecord");
const fs = require('fs');
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
var testVal =[];

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
parser.on('data', function(data){
  testVal.push(data);
})

function router(){
    staffRouter.get('/',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        // res.send({data:testVal});
        // const readFileLines = filename =>
        // fs.readFileSync(filename)
        // .toString('UTF8')
        // .split('\n');
        // let array = readFileLines('/Users/keziaannmathew/Documents/works/Hack_DFW/textfiles/test.txt');
        // console.log(array[0])
        console.log(testVal)
        StaffData.findOne({rfid:testVal[1]},(err,doc)=>{
            // if(doc){
            //     var item = {
            //         rfid:testVal,
            //         roomid:'testroom',
            //         entrytime: Date.now(),
            //         exittime: ''
            //     }
            //     var record= RoomData(item);
            //     record.save();
            // }
            console.log(doc)
            res.send({data:doc})
        })
    })

    //fetch the roomdata with the room id and fetch the corresponding rfid
    // staffRouter.get('/getlogs',function(req,res){
    //     res.header("Access-Control-Allow-Origin", "*")
    //     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    //     const testarr = RoomData.aggregate(
    //         [
    //             {   
    //                 "$project": 
    //                 {     
    //                 "roomid": "testroom",  
    //                 }
    //             }, 
    //             { "$lookup": {     
    //                     "from": "StaffData",     
    //                     "localField": "rfid",     
    //                     "foreignField": "rfid",     
    //                     "as": "staffdata"   
    //             }}, 
    //             { "$project": { 
    //                 "roomid": 1, 
    //                 "staffdata": { "$arrayElemAt": [ "$countryInfo", 0 ] } 
    //             }},
    //             {
    //                 "$unwind": '$rfid'
    //             }
    //         ]
    //     )
    //     console.log(testarr)
    // })

    return staffRouter;
}

module.exports = router;
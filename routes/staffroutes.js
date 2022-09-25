const express = require('express');
const staffRouter=express.Router();
const StaffData=require("../modals/staffData");
const RoomData=require("../modals/roomRecord");
const { ReadlineParser } = require('@serialport/parser-readline')
const { SerialPort } = require('serialport');
const { parse } = require("path");
// const { default: test } = require("node:test");

// const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
// var testVal = [];

// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// parser.on('data', console.log)
// parser.on('data', function(data){
//   testVal.push(data+" ");
// })

function router(){
    staffRouter.get('/',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        // res.send({data:testVal});
        StaffData.findOne({rfid:"2"},(err,doc)=>{
            if(doc){
                var item = {
                    rfid:doc.rfid,
                    name:doc.name,
                    img:doc.img,
                    title:doc.title,
                    speciality:doc.speciality,
                    otherinfo:doc.otherinfo,
                    roomid:'testroom',
                    entrytime: Date.now(),
                    exittime: '',
                    flag:true
                }
                var record= RoomData(item);
                record.save();
            }
        })
        RoomData.find({roomid:"testroom"},(err,doc)=>{
            res.send({data:doc})
        })
    })

    return staffRouter;
}

module.exports = router;
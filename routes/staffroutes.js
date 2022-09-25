const express = require('express');
const staffRouter=express.Router();
const StaffData=require("../modals/staffData");
const RoomData=require("../modals/roomRecord");

const { ReadlineParser } = require('@serialport/parser-readline')
const { SerialPort } = require('serialport');
const { parse } = require("path");
const { default: test } = require("node:test");
const fs = require('fs');
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
var testVal =[];

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
parser.on('data', function(data){
  testVal.push(data);
})

function router(){
    staffRouter.get('/',async function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        // res.send({data:testVal});
        let roomdoc = await RoomData.findOne({rfid:testVal[1],roomid:"testroom",exittime:'',flag:true})
        if(roomdoc == null){
             StaffData.findOne({rfid:testVal[1]},(err,doc)=>{
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
            })
        }
        else{
            await RoomData.findOneAndUpdate({rfid:testVal[1],roomid:"testroom",exittime:'',flag:true},{flag:false,exittime:Date.now()})
        }
        
        let result = await RoomData.find({roomid:"testroom"})
        res.send({data:result})
        
    })

    return staffRouter;
}

module.exports = router;
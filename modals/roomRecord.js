const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://whoareyouuser:whoareyouuser@cluster0.pegugmd.mongodb.net/whoareyoudb?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const RoomRecords = new Schema({
    rfid:String,
    name:String,
    img:String,
    title:String,
    speciality:String,
    otherinfo:String,
    roomid:String,
    entrytime: Date,
    exittime: Date,
    flag:Boolean
});

var Roomrecords = mongoose.model('roomrecords', RoomRecords);

module.exports = Roomrecords;
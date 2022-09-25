const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://whoareyouuser:whoareyouuser@cluster0.pegugmd.mongodb.net/whoareyoudb?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const RoomRecords = new Schema({
    rfid:String,
    roomid:String,
    patientid:String,
    entrytime: Date,
    exittime: Date
});

var Roomrecords = mongoose.model('roomrecords', RoomRecords);

module.exports = Roomrecords;
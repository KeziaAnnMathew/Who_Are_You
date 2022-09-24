const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://whoareyouuser:whoareyouuser@cluster0.pegugmd.mongodb.net/whoareyoudb?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const StaffSchema = new Schema({
    name:String,
    rfid:String,
    img:String,
    title:String,
    speciality:String,
    otherinfo:String,
    entrytime: Date,
    exittime: Date
});

var Staffdata = mongoose.model('staffdata', StaffSchema);

module.exports = Staffdata;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/volunteer", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});  

const VolunteerSchema = new mongoose.Schema({
    //个人信息
    Sname: String,
    College: String,
    Class: String,
    Number: String,
    totalTime: String,
    // 志愿时长信息
    Weeks: String,
    Category: String,
    proName: String,
    Time: String,
}); 

module.exports = mongoose.model("Volunteer", VolunteerSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mobileSchema = new Schema({
    MobileName :{
        type:String,
        required:true,
        unique:true
    },
    Memory :{
        type:Array,
        required:true
    },
    OS : {
        type:String,
        required:true
    },
    Color :{
        type:String,
        required:true
    },
    Price :{
        type:Number,
        required:true
    }
});
var mobile = mongoose.model('mobile', mobileSchema);
module.exports = mobile;
const mongoose= require ('mongoose')
const Schema= mongoose.Schema


const sch = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    inquiry: {
        type: String
    },



})
module.exports= userSchema=mongoose.model('customer',sch)
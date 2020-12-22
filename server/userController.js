const customerModel = require('./models/customer')


let userControllers = {


addCustomer : async(req,res) =>{
  try{
    const {name,phone,email,inquiry} = req.body
    const newCustomer = await customerModel.create({name,phone,email,inquiry})
    if (newCustomer){
    return res.json({
        success:true,
        message:"Registered Succefully, Thank you."
    })
    }
    return res.json({
        success:false,
        message:"Contact IT Support"
    })
  }
  catch(err){
    console.log(err)
    return res.json({
        success:false,
        message:"Contact IT Support",
        func:"addCustomer"
    })
  }
},

getCustomer : async(req,res) =>{
    try{
        const {inquiry} = req.body
        console.log(inquiry)
        let customers = await customerModel.find().sort({"_id":-1})
        if (customers.length){
        return res.json({
            success:true,
            message:"",
            data:customers
        })
        }
        return res.json({
            success:false,
            message:""
        })
        }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Contact IT Support",
            func:"getCustomer"
        })
    }
},


}

module.exports = userControllers
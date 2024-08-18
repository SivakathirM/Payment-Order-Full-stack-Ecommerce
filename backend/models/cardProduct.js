const mongoose=require("mongoose")

const addToCard=mongoose.Schema({
   productId:{
    ref: 'product',
    type:String
   },
   quantity: Number,
   userId:String
},{
    timestamps:true
})

const addToCardModel=mongoose.model("addToCard",addToCard)

module.exports =addToCardModel


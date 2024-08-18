const addToCardModel =require("../../models/cardProduct")

const deleteAddToCardProduct=async(req,res)=>{
    try {
        const currentUserId=req.userId
        const addToCardProductId=req.body._id

        const  deleteProduct=await addToCardModel.deleteOne({_id:addToCardProductId})

        res.json({
            message:"Product Deleted From Card",
            error:false,
            success:true,
            data:deleteProduct
        })
    } catch (err) {
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=deleteAddToCardProduct
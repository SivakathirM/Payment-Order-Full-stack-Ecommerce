const addToCardModel =require("../../models/cardProduct")

const updateAddToCardProduct=async(req,res)=>{
    try {
        const currentUserId=req.userId 
        const addToCardProductId=req?.body?._id
        const qty =req.body.quantity

        const updateProduct =await addToCardModel.updateOne({_id:addToCardProductId},{
           ...(qty && { quantity: qty})
        })

        res.json({
            message:"Product Updateed",
            data:updateProduct,
            error:false,
            success:true
        })
    } catch (err) {
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=updateAddToCardProduct
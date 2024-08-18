const addToCardModel = require("../../models/cardProduct")

const countAddToCardProduct=async(req,res)=>{
    try {
        const userId= req.userId
        const count =await addToCardModel.countDocuments({
            userId:userId
        })

        res.json({
            data:{
                count:count
            },
            message:"ok",
            success:true,
            error:false
        })
    } catch (err) {
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=countAddToCardProduct
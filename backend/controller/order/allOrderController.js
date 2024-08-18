const userModel = require("../../models/userModel")
const orderModel = require("../../models/orderProductModel")

const allOrderController=async(request,response)=>{
    const userId=request.userId

    const user=await userModel.findById(userId)

    if (user.role !== 'ADMIN') {
        return response.status(500).json({
            message:"Not access"
        })
    }

    const AllOrder=await orderModel.find().sort({createdAt:-1})

    return response.json({
        data:AllOrder,
        success:true,
    })
}

module.exports=allOrderController
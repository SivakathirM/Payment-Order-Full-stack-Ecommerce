const addToCardModel = require("../../models/cardProduct")

const addToCardController =async(req,res)=>{
    try {
        const {productId}=req?.body
        const currentUser=req.userId

        const isproductAvailable=await addToCardModel.findOne({productId , userId:currentUser })

        if (isproductAvailable) {
         return res.json({
            message:"Already exits in Add to cart",
            success:false,
            error:true
         })
        }


        const payload={
            productId:productId,
            quantity: 1,
            userId:currentUser 
        }

        const newAddToCart =new addToCardModel(payload)

        const saveProduct =await newAddToCart.save()

        return res.json({
            data:saveProduct,
            message:"Product Added in Cart",
            quantity:1,
            userId:currentUser,
            success:true,
            error:false
        })
    } catch (err) {
        res.json({
            message:err?.message || err,
            error:true,
            success:false
        })
    }
}

module.exports =addToCardController
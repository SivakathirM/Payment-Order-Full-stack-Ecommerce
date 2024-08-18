const express = require("express")

const router=express.Router()

const userSignUpController=require("../controller/user/userSignUp")
const userSignInController=require("../controller/user/userSignin")
const userDetailsController = require("../controller/user/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require("../controller/user/userLogout")
const allUsers = require("../controller/user/allUsers")
const updateUser = require("../controller/user/updateuser")
const uploadProductController = require("../controller/product/uploadProduct")
const getProductController = require("../controller/product/getProduct")
const updateProductController = require("../controller/product/updateProduct")
const getCategoryProduct = require("../controller/product/getCategoryProductOne")
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct")
const getProductDetails = require("../controller/product/getProductDetails")
const addToCardController = require("../controller/user/addToCardController")
const countAddToCardProduct = require("../controller/user/countAddToCardProduct")
const addToCardViewProduct = require("../controller/user/addToCardViewProduct")
const updateAddToCardProduct = require("../controller/user/updateAddToCardProduct")
const deleteAddToCardProduct = require("../controller/user/deleteAddToCardProduct")
const SearchProduct = require("../controller/product/searchProduct")
const filterProductController = require("../controller/product/filterProduct")
const paymentController = require("../controller/order/paymentController")
const webhooks = require("../controller/order/webhook")
const orderController = require("../controller/order/orderControlller")
const allOrderController = require("../controller/order/allOrderController")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken, userDetailsController)
router.get("/userLogout",userLogout)

//admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product

router.post("/upload-product",authToken,uploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",SearchProduct)
router.post("/filter-product",filterProductController)

// user add to card

router.post("/addtocart", authToken,addToCardController)
router.get("/countAddToCardproduct",authToken,countAddToCardProduct)
router.get("/view-card-product",authToken,addToCardViewProduct)
router.post("/update-card-product",authToken,updateAddToCardProduct)
router.post("/delete-card-product",authToken,deleteAddToCardProduct)
router.get("/all-order",authToken,allOrderController)

// payment and order
router.post("/checkout",authToken,paymentController)
router.post("/webhook",webhooks) // /api/webhook
router.get("/order-list",authToken,orderController)

module.exports=router
const backendDomin = process.env.REACT_APP_BACKEND_URL

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  SignIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },categoryProduct:{
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },categoryWiseProduct:{
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },productDetails:{
    url: `${backendDomin}/api/product-details`,
    method: "post"
  },addToCardProduct:{
    url: `${backendDomin}/api/addtocart`,
    method: "post"
  },addToCardProductCount:{
    url: `${backendDomin}/api/countAddToCardproduct`,
    method: "get"
  },addToCardProductView:{
    url: `${backendDomin}/api/view-card-product`,
    method: "get"
  },updateCardProduct:{
    url: `${backendDomin}/api/update-card-product`,
    method: "post"
  },deleteCardProduct:{
    url: `${backendDomin}/api/delete-card-product`,
    method: "post"
  },searchProduct:{
    url: `${backendDomin}/api/search`,
    method:"get"
  },filterProduct:{
    url:`${backendDomin}/api/filter-product`,
    method:"post"
  },payment:{
    url:`${backendDomin}/api/checkout`,
    method:'post'
  },getOrder:{
    url:`${backendDomin}/api/order-list`,
    method:'get'
  },allOrder:{
    url:`${backendDomin}/api/all-order`,
    method:'get'
  }
};

export default SummaryApi;

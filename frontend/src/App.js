import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userslice";

function App() {
  const dispatch = useDispatch();
  const [cardProductCount,setCardProductCount]=useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

  };

  const fetchUserAddToCard=async()=>{
      const dataResponse = await fetch(SummaryApi.addToCardProductCount.url, {
        method: SummaryApi.addToCardProductCount.method,
        credentials: "include",
      });
  
      const dataApi = await dataResponse.json();
  
      setCardProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    // user Details
    fetchUserDetails();
    // eslint-disable-next-line
    // user Details card count product
    fetchUserAddToCard()
  },[])
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user detail fetch
          cardProductCount, //current user add to product count
          fetchUserAddToCard
        }}
      >
        <ToastContainer autoClose={1000} position="top-center"/>
        <Header />
        <main className="min-h-[calc(120vh-120px)] pt-16">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;

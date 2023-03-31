import React,{useEffect} from "react";
import Footer from "../../components/footer";
import LoginComponent from "../../components/login";
import Navbarr from "../../components/navbar";
import { TabTitle } from "../../helpers/TabTitle";
import { useDispatch,useSelector } from "react-redux";
import { getCartServices } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { JwtId } from "../../helpers/JwtId";

function Login() {
  TabTitle('LOGIN - Zoom Flooring')
  const token=JwtId()
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state?.service?.cartProducts);
  console.log(cartProducts,"in cart")


  useEffect(()=>{
    if(cartProducts!==null&&cartProducts?.length!==0 && Object.keys(token)?.length!==0){
      navigate('/checkout')
    }
  },[cartProducts])
  return (
    <>
      <Navbarr />
      <LoginComponent />
      <Footer />
    </>
  );
}

export default Login;

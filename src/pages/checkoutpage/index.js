import React,{useEffect} from 'react'
import Checkout from '../../components/billing/checkout'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { TabTitle } from '../../helpers/TabTitle'
import { useDispatch,useSelector } from "react-redux";
import { getServices } from '../../redux/actions/serviceActions';
import { getCartServices } from '../../redux/actions/cartActions';
import { JwtId } from '../../helpers/JwtId'

const Index = () => {
  TabTitle("CHECK-OUT - Zoom Flooring")
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state?.service?.cartProducts);
  const token = JwtId()

  useEffect(()=>{
    if(cartProducts?.length===0||cartProducts===null||cartProducts===undefined){
    dispatch(getCartServices());
    }
  },[cartProducts])
  return (
 <>

 <Checkout cartProducts={cartProducts} token={token}/>

 <Footer/>
 </>
  )
}

export default Index
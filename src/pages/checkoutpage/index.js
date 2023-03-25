import React from 'react'
import Checkout from '../../components/billing/checkout'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { TabTitle } from '../../helpers/TabTitle'

const Index = () => {
  TabTitle("CHECK-OUT - Zoom Flooring")
  return (
 <>
     <Navbar/>

 <Checkout/>

 <Footer/>
 </>
  )
}

export default Index
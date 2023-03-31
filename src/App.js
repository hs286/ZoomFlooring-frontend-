import "./App.css";
import Home from "./pages/home";
import ScrollUpButton from "react-scroll-up-button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import SignUp from "./pages/register";
import ServicesDetail from "./pages/services-product-details";
import Checkout from "./pages/checkoutpage";
import Cart from "./pages/cartpage";
import Service from "./pages/services-poduct";
import ForgetPassword from "./pages/forget-password"
import { WhatsAppWidget } from "react-whatsapp-widget";
 import "react-whatsapp-widget/dist/index.css";
import Login from "./pages/login";
import AboutUsPage from "./pages/about-us";




const  App=()=> {
 
  const CompanyIcon = () => (
  
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="23000px" height="240px" viewBox="0 0 415.000000 173.000000"
     preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g transform="translate(0.000000,173.000000) scale(0.100000,-0.100000)"
    fill="#943932" stroke="none">
    <path d="M2551 1571 c-54 -35 -12 -372 60 -472 26 -37 49 -42 304 -73 116 -14
    231 -29 258 -32 60 -7 62 -25 2 -20 -25 3 -47 0 -51 -5 -3 -5 -13 -5 -24 1
    -59 31 -115 -8 -152 -107 -40 -104 -39 -101 -15 -118 21 -15 21 -15 -11 -15
    -29 0 -32 -3 -32 -30 0 -36 23 -44 109 -38 89 6 106 24 167 174 60 148 61 149
    183 138 85 -8 85 -12 5 82 -28 33 -54 72 -57 86 -4 13 -18 30 -32 38 -14 8
    -59 52 -99 99 -109 127 -191 208 -234 229 -73 38 -350 83 -381 63z m259 -51
    c51 -12 105 -27 120 -35 15 -8 78 -67 140 -132 l113 -118 -6 -103 c-3 -57 -8
    -106 -11 -109 -7 -7 -443 45 -489 58 -42 12 -58 34 -89 127 -29 85 -52 248
    -41 294 11 53 9 51 92 44 43 -3 120 -15 171 -26z"/>
    <path d="M357 998 l-14 -33 33 -3 34 -3 -69 -87 c-68 -86 -111 -150 -111 -164
    0 -5 43 -8 95 -8 l96 0 14 33 13 32 -34 5 -35 5 81 103 c44 57 80 107 80 112
    0 5 3 15 6 24 5 14 -6 16 -85 16 l-91 0 -13 -32z"/>
    <path d="M1566 1022 c-10 -17 -126 -305 -126 -314 0 -5 23 -8 52 -6 l51 3 28
    65 c24 58 30 65 59 68 22 2 34 10 41 28 14 38 11 44 -16 44 -28 0 -29 3 -15
    31 7 13 21 19 44 19 29 0 36 5 45 31 6 18 11 34 11 35 0 8 -169 3 -174 -4z"/>
    <path d="M1767 1022 c-7 -11 -127 -311 -127 -318 0 -3 23 -4 52 -2 l52 3 58
    144 c80 201 78 181 19 181 -27 0 -52 -3 -54 -8z"/>
    <path d="M600 969 c-43 -17 -68 -49 -100 -125 -50 -122 -37 -150 70 -142 75 5
    110 31 144 108 47 103 49 118 21 146 -26 26 -87 32 -135 13z"/>
    <path d="M854 966 c-40 -18 -76 -66 -103 -139 -40 -108 -26 -132 72 -125 87 5
    117 28 156 122 37 89 39 119 9 140 -27 19 -92 20 -134 2z"/>
    <path d="M1197 974 c-3 -4 -34 -7 -68 -8 l-61 -1 -49 -120 c-26 -66 -48 -126
    -49 -133 0 -9 13 -12 47 -10 l48 3 28 70 c50 122 69 160 74 149 2 -6 -14 -57
    -37 -113 -22 -56 -40 -104 -40 -106 0 -3 22 -5 49 -5 48 0 49 1 66 43 54 135
    78 186 85 182 5 -3 -11 -53 -35 -113 l-43 -107 45 -3 c25 -2 49 0 54 5 14 15
    89 213 89 237 0 37 -56 49 -97 21 -18 -13 -22 -13 -33 0 -12 15 -61 21 -73 9z"/>
    <path d="M1922 963 c-18 -9 -41 -28 -51 -42 -20 -30 -71 -154 -71 -175 0 -62
    157 -62 212 0 26 29 78 168 72 191 -11 42 -100 57 -162 26z"/>
    <path d="M2190 969 c-14 -6 -35 -20 -47 -31 -24 -22 -83 -163 -83 -197 0 -27
    29 -41 87 -41 78 0 112 24 155 111 44 86 48 131 16 153 -25 18 -90 20 -128 5z"/>
    <path d="M2418 973 c-10 -3 -35 -50 -67 -131 -28 -70 -51 -130 -51 -134 0 -5
    22 -8 49 -8 l48 0 34 83 c30 72 38 83 67 92 17 5 35 17 38 27 5 18 24 25 24
    10 0 -5 -18 -53 -40 -107 -22 -54 -40 -100 -40 -102 0 -1 24 -3 54 -3 l53 0
    43 110 c33 86 46 110 61 110 21 0 23 8 -44 -157 l-26 -63 53 0 53 0 43 110
    c40 101 60 139 60 111 0 -6 -18 -56 -40 -111 -22 -55 -40 -103 -40 -106 0 -3
    23 -4 51 -2 l51 3 44 110 c24 60 44 119 44 132 0 27 -40 41 -79 26 -14 -5 -42
    -6 -61 -2 -24 5 -44 3 -64 -7 -37 -18 -46 -18 -46 2 0 14 -8 16 -52 11 -29 -4
    -54 -11 -56 -17 -2 -5 -8 -10 -14 -10 -6 0 -8 7 -4 15 7 19 -13 19 -41 0 -12
    -8 -23 -11 -25 -7 -4 11 -57 20 -80 15z"/>
    <path d="M50 761 c0 -102 -3 -131 -15 -141 -12 -10 -15 -38 -15 -130 0 -127 7
    -144 60 -152 22 -3 24 -7 20 -33 -3 -16 -5 -58 -5 -92 0 -101 32 -122 280
    -183 l130 -32 905 6 c1204 8 1505 8 1885 0 l320 -6 85 25 c47 15 131 40 187
    57 183 56 255 138 193 222 -22 30 -20 39 14 51 18 6 35 222 20 261 -5 14 -37
    16 -253 16 -217 0 -253 3 -309 20 -81 25 -147 25 -222 0 -59 -20 -84 -20
    -1194 -20 -1104 0 -1135 1 -1191 20 -74 25 -150 25 -226 0 -54 -19 -81 -20
    -302 -18 l-242 3 -3 125 -3 126 -59 1 -60 2 0 -128z m3478 -269 c70 -32 112
    -127 91 -204 -30 -111 -141 -167 -246 -123 -50 21 -72 42 -94 90 -34 75 -20
    153 39 208 58 55 132 65 210 29z m-2586 -14 c97 -74 93 -228 -8 -297 -74 -51
    -189 -34 -243 35 -68 87 -43 225 52 277 50 27 154 20 199 -15z m2174 -110 c-4
    -35 -10 -65 -13 -68 -8 -8 -1917 -10 -1929 -2 -6 4 -14 35 -17 70 l-5 62 985
    0 986 0 -7 -62z"/>
    </g>
    </svg>
    
  
      );

  return (
    <>
      <WhatsAppWidget
        phoneNumber="17378951918"
        message="Hello, How can I help you!"
        z-index="100"
        companyName="Zoom Flooring"        
        replyTimeText="Typically reply within hour"
        CompanyIcon={CompanyIcon} 
        />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path = '/services/detail'  element={<ServicesDetail/>}/> */}
          <Route path="/services" element={<Service />} />
          <Route path="/services/:category" element={<Service />} />
          <Route path="/services/:category/:id" element={<ServicesDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path ='/register' element = {<SignUp/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>
      </Router>
      
      <ScrollUpButton />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import HomeComoponet from "../../components/home-comoponet";
import Navbar from "../../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { getHomeData, getServices } from "../../redux/actions/serviceActions";

import { Carousel, CarouselItem } from "react-bootstrap";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import Footer from "../../components/footer";
import { TabTitle } from "../../helpers/TabTitle";
import Loader from "../../helpers/Loader";

function Home() {
  // const obj = [
  //   {
  //     data: "HI",
  //   },
  //   {
  //     data: "HI 1",
  //   },
  //   {
  //     data: "HI 2",
  //   },
  // ];
  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (activeIndex === 2) {
  //       setActiveIndex(0);
  //     } else {
  //       setActiveIndex(activeIndex + 1);
  //     }
  //   }, 5000); // set the interval to 5 seconds
  //   return () => clearInterval(timer);
  // }, [activeIndex]);
  TabTitle('Zoom Flooring')

  const dispatch = useDispatch();
  const homedata = useSelector((state) => state?.service?.homeData);
  useEffect(() => {
    if (homedata.length===0) {
      console.log(homedata)
      dispatch(getHomeData());
    }
  }, [homedata, dispatch]);
  // const slides = [
  //   {
  //     id: 1,
  //     des: "hi 1",
  //     caption: [{ c: "Slide 11" }, { c: "Slide 12" }, { c: "Slide 13" }],
  //   },
  //   {
  //     id: 2,
  //     des: "hi 2",
  //     caption: [{ c: "Slide 21" }, { c: "Slide 22" }, { c: "Slide 23" }],
  //   },
  //   {
  //     id: 3,
  //     des: "hi 3",
  //     caption: [{ c: "Slide 31" }, { c: "Slide 32" }, { c: "Slide 33" }],
  //   },
  // ];

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  // };
  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  // };
  return (
    <>
    <Navbar/>
    {homedata.length===0&&<Loader/>}
    {homedata&&<HomeComoponet homeData={homedata}/>}
    <Footer/>
     </>
  );
}

export default Home;

import React from "react";
import { Button, Carousel, CarouselItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomeComoponet = ({ homeData }) => {
  var des = [];
  return (
    <>
      <div className="container">
        {homeData &&
          homeData.map((slide) => {
            {
              des = slide.description.split("\n");
            }

            return (
              <div className="row " key={slide._id}>
                <h2 className="text-center p-3 bg-dark text-light mb-5 mt-5">
                  {slide.category}
                </h2>
                <div className="col-lg-6 col-12">
                  <Carousel className="d-block ">
                    {slide.image.map((e) => (
                      <Carousel.Item style={{ height: "32rem" }} key={e}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          src={
                            `${process.env.REACT_APP_API}/images/${e}` 
                            
                          }
                          alt={e}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className=" col-lg-6 col-12">
                  <>
                    {des.map((e, index) => {
                      if (e.length < 20) {
                        return (
                          <p key={index} className="text-info fs-4">
                            <b>{e}</b>
                          </p>
                        );
                      } else {
                        return <p key={index}>{e}</p>;
                      }
                    })}
                    <Link to={"/contact"}>
                      <Button variant="secondary" className="fs-5">
                        Contact Us
                      </Button>
                    </Link>
                  </>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeComoponet;

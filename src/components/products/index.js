import React from 'react'
import { Link } from 'react-router-dom'

//import productDescription from '../productDescription'

function index({products}) {
    // console.log(products[0].price.$numberDecimal,"hi")
    // const handleClick=(e,users)=>{
    //   e.preventDefault();
    //   <productDescription productDetails={users}/>
    // }
  return (
    <>
     <div className = "container">
        {products !==  undefined && (
          <>
            <div>
              <div className = "row ">
                {products.map((campaigns)  => (
                  <React.Fragment key = {campaigns._id} >
                    <div className = "col-md-4 col-12 mt-2 mb-2" data-aos = "fade-up">
                    <Link to={`/services/${campaigns.category}/${campaigns._id}`}>

                      <div className = "card services  h-100">
                      <img
                    className = "card-img-top"
                    style = {{ height:"300px", objectFit: "fill" }}
                    src = {
                      `${process.env.REACT_APP_API}/images/${campaigns.image}`
                    }
                    alt = "Cardimagecap"
                  />
                        <div className = "card-body">
                          {/* <div className = "d-flex justify-content-between">
                            <p className = "card-text fw-light text-muted">
                              Funding
                            </p>
                            <p
                              className = "badge text-white bg-success"
                              style = {{ textTransform: "capitalize" }}
                            >
                              {campaigns.status}
                            </p>
                          </div> */}
                          <h5 className = "card-title text-info">
                            {campaigns.name}
                          </h5>
                          <p className = "card-text"></p>
                          <p className = "fw-bold">
                          <span className = "fw-light "> Price: </span>

                            ${campaigns.price.$numberDecimal} for {campaigns.unit}
                          </p>
                          {/* <button
                            className = "raiseFund text-white btn bg-info"
                            onClick = {() => handleCampaignClick(campaigns.id)}
                          >
                            Raise fund
                          </button> */}
                        </div>
                      </div>
                      </Link>

                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
        
      </div>
      
    </>
  )
}

export default index

import React from 'react'
import { useDispatch } from 'react-redux'

export const Contact = () => {
    const dispatch=useDispatch()
    const handleSubmit=()=>{
        dispatch()
    }
  return (
    <>
    
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
        </div>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" onSubmit={handleSubmit}>
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                        <select className="custom-select fs-5 mb-3">
                                <option selected>Get A Quote</option>
                                <option >FLoor Installation</option>
                                <option>Floor Cleaning</option>
                                <option>Carpet Cleaning</option>
                                <option >Upholstery Cleaning</option>
                                <option >Air Duct Cleaning</option>
                                <option >Upholstery Cleaning</option>
                                <option >Other</option>
                        </select>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Message"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                
                <div className="d-flex flex-column">
                    <h5 className="font-weight-semi-bold text-info mb-3">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-danger mr-3"></i>8911 N Capital of Texas Hwy St. 4200 Austin, TX 78759</p>
                    {/* <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p> */}
                    <h5 className="font-weight-semi-bold text-info mb-3">Phone</h5>

                    <p className="mb-0"><i className="fa fa-phone-alt text-success mr-3"></i>7378951918</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
export default Contact

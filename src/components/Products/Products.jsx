import React from "react";
import icon from "../../assets/images/image 58 (Traced).png";
import icon2 from "../../assets/images/image 61 (Traced).png";
import thumbnail from "../../assets/images/Rectangle 14.png";
import star from "../../assets/images/Star 1.png";

const Products = () => {
  return (
    <>
      <div id="products">
        <div className="container">
          <div className="row">
            {/*header start */}
            <div className="header d-flex align-items-center">
              <div className="header_icon">
                <img src={icon} alt="" />
              </div>
              <h2 className="header_title">Your Favorite Paramedics</h2>
            </div>
            {/*header end */}
            {/* card start */}
            <div className="col-md-3">
              <div className="products_warper">
                <div className="products_content">
                  <div className="thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>
                  <div className="details">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="name_and_shipping">
                          <h2>Al Shifa Pharma</h2>
                          <span>Free</span> <p>Delivery</p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="ratings_and_price">
                          <div className="ratings_wrapper d-flex align-items-center">
                            <span className="ratings">
                              <img src={star} alt="" />
                            </span>
                            <span className="ratings_number">3.5</span>
                            <h4>/5(120+)</h4>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="ratings">
                              <img src={icon2} alt="" />
                            </span>
                            <span className="ratings_number">250m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="time">
                    <span>15</span><p>MIN</p>
                  </div>
                </div>
              </div>
            </div>
            {/*card end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

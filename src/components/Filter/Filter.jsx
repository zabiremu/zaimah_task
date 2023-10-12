import React from "react";
import icon from "../../assets/images/Group 32.png";
const Filter = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* filter start */}
          <div className="col-lg-3 col-xl-3 col-md-5">
            <ul className="nav">
              <li className="nav-item dropdown">
                <a
                  className="d-flex align-items-center button dropdown-toggle text-decoration-none"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <span className="filter_icon">
                    <img src={icon} alt="" />
                  </span>
                  <span className="filter_title">Filter</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Pharmacy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Medicine
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Paramedics
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* filter end */}
          {/* search start */}
          <div className="col-lg-9 col-xl-9 col-md-7">
            <div className="search d-flex align-items-center">
              <i class="fa-solid fa-magnifying-glass search_icon"></i>
              <input
                type="text"
                className="input-control"
                placeholder="Search for Pharmacy, Medicine, Paramedics, Ambulance and Allied Health"
              />
            </div>
          </div>
          {/* search end */}
        </div>
      </div>
    </>
  );
};

export default Filter;

import React from "react";
import { NavLink } from "react-router-dom";

const CardView = () => {
  return (
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-sm-6">
          <div className="card col-8 mt-5 ml-5">
            <div className="card-body">
              <h5 className="card-title">Welcome to Fusi Invest</h5>
              <p className="card-text">
                Hope you already know about Fusi if not then please visit on
                Fusi site.
              </p>
              <NavLink exact to="/fusible">
                <button className="btn btn-outline-primary">
                  Explore Fusi
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card col-8 mt-5 ml-5">
            <div className="card-body">
              <h5 className="card-title">Explore Investor Features</h5>
              <p className="card-text">
                Yeah 😎 You are on the right place 😄 Go to Investor Dashbaord
              </p>
              <NavLink exact to="/invest">
                <button className="btn btn-outline-primary">Investor</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;

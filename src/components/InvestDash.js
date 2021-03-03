import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const InvestDash = () => {
  const [showlist, setShowlist] = useState(false);

  return (
    <>
      <div className="text-center mt-5">
        {showlist ? (
          <div className="row ml-1 mr-1">
            <div className="col-8">
              <ul class="list-group text-left">
                <li class="list-group-item">Address: </li>
                <li class="list-group-item">Balance: $450</li>
              </ul>
            </div>
            <div className="col-4">
              <ul class="list-group">
                <li class="list-group-item">
                  <div className="jumbotron">
                    <p className="display-4">Welcome Investor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <br />
        <Button onClick={() => setShowlist(true)} variant="primary" size="lg">
          Connect Wallet
        </Button>
      </div>
    </>
  );
};

export default InvestDash;

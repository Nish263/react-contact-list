import React from "react";
import "./card.css";

export const Card = ({ usr }) => {
  return (
    <div className="col-md-6 col-lg-3 py-3 ">
      <div className="card border-2 border-danger ">
        <img src={usr.picture.large} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {usr.name.title} {usr.name.first} {usr.name.last}
          </h5>
          <p className="card-text">
            <ul className="list-unstyled ">
              <li>
                <i className="fa-solid fa-phone"> </i> Phone:{usr.cell}
              </li>
              <li>
                <i className="fa-solid fa-envelope"> </i>
                {usr.email}
              </li>
              <li>
                <i className="fa-solid fa-map-location"></i>
                {usr.location.country}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

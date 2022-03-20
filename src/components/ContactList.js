import React from "react";
import { Card } from "./Card";

export const ContactList = ({ users }) => {
  console.log(users, "rendering completed");
  return (
    <div className="row">
      <div className="col">
        {/* spinner */}
        {users.length ? (
          <Card />
        ) : (
          <div className="d-flex justify-content-center text-info">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from "react";
import { Card } from "../components/card/Card";

export const ContactList = ({ users }) => {
  console.log(users, "rendering completed");
  return (
    <div className="row">
      {/* spinner */}
      {users.length ? (
        users.map((usr, i) => <Card key={i} usr={usr} />)
      ) : (
        <h5>User not found </h5>
      )}
    </div>
  );
};

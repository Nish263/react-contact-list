import React from "react";

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center text-info">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

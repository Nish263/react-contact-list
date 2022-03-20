import React from "react";

export const SearchFilter = () => {
  return (
    <div className="row">
      <div className="col">
        <input type="text" className="form-control" />
      </div>
      <div className="col">
        <select name="" id="" className="form-control">
          <option value="">--Select Gender--</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
      </div>
    </div>
  );
};

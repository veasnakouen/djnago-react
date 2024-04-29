import React from "react";
import "./searchForm.css";

const SearchForm = ({
  active,
  formOpen,
}: {
  active: boolean;
  formOpen: object | any;
}) => {
  return (
    <div
      className={`search-form-wrap js-search-form-wrap ${
        active ? "active" : undefined
      }`}
    >
      <form action="" className="search-form">
        <span className="icon bi-search"></span>
        <input type="text" placeholder="Search" className="form-control" />
        <button className="btn js-search-close" onClick={formOpen}>
          <span className="bi-x"></span>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

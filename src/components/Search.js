import React from 'react';

const Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button
      className="btn hidden-sm-down"
      onClick={() => {
        props.searchVideo(document.querySelector('.form-control').value);
      }}
    >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;

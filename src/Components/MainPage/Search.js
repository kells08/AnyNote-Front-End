import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search" >
       <p>Search your notes: </p> <input type='text' placeholder='note title'/> <button class='button small'>Search</button>
      </div>
    );
  }
}

export default Search;
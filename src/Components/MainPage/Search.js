import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="">
       Search your notes:
       <input type='text'placeholder='note title'/>
       <button>Search</button>
      </div>
    );
  }
}

export default Search;
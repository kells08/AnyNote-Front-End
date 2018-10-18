import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="" style={{backgroundColor:'white', opacity:'.8'}}>
       Search your notes:
       <input type='text'placeholder='note title'/>
       <button>Search</button>
      </div>
    );
  }
}

export default Search;
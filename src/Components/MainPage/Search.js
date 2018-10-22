import React, { Component } from 'react';

class Search extends Component {

  state = {
    searchTerm: ''
  }

  filterTitles = (e) => {
    this.setState({searchTerm:e.target.value})
    console.log(e.target.value)
  }

  filteredTitles = () => {
    const allTitles = this.props.notes
    console.log(allTitles)
    // return allTitles.filter( note => {
      // return note.title.includes(this.state.searchTerm)
    // })
  }

  // can this toggle on and off???
  render() {
    return (
      <div className="search" >
        <p>Search your notes by title: </p> 
        <input type='text' placeholder='note title' onChange={this.filterTitles}/> 
        {/* {this.filteredTitles().map(note => {
        return (
          <div onClick={e => this.props.handleClick(note)}>
            <h3>{note.title}</h3>
          </div>
         )
       })} */}
       {/* <button id="searchbutton" class='button small'>Go</button> */}
      </div>
    );
  }
}

export default Search;
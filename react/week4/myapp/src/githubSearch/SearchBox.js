import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { searchTerm, changeHandler, searchHandler } = this.props;
    return(
        <div>
            <input
                type='text'
                onChange={changeHandler}
                value={searchTerm}
            />
        </div>
    ) 
  }
}
export default SearchBox;
import React, { Component } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { searchUser } from "./SearchGithubAPI";

class githubSearch extends Component {
  state = {
    items: null,
    loadStatus: "isLoading",
    inputText: ""
  };
  changeHandler = e => {
    this.setState({ inputText: e.target.value }, () => {
      this.searchHandler();
    });
  };
  searchHandler = () => {
    searchUser(this.state.inputText)
      .then(res => this.setState({ items: res.items, loadStatus: "loaded" }))
      .catch(err => this.setState({ loadstatus: "error" }));
  };
  render() {
    const { items, loadStatus, inputText } = this.state;
    console.log(loadStatus);
    
    return (
      <React.Fragment>
        <SearchBox
          searchTerm={inputText}
          changeHandler={this.changeHandler}
          searchHandler={this.searchHandler}
        />
        <SearchResult items={items} loadStatus={loadStatus} />
      </React.Fragment>
    );
  }
}
export default githubSearch;
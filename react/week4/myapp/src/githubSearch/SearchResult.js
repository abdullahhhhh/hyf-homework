import React, { Component } from "react";

 class SearchResults extends Component {
  renderUsers = items => {
    return items.map(item => {
      return (<li key={item.id}>{item.login} URL: {item.url}</li> );
    });
  };

  render() {
    const { items, loadStatus } = this.props;
    if (items) {
      console.log(loadStatus);
      return <ul>{this.renderUsers(items)}</ul>;
    } else if (!items) {
      return <p>No data</p>;
    } else {
      return <p>Error</p>;
    }
  }
}
export default SearchResults;
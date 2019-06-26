import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>
    }
    if (this.props.error) {
      return <div>Error: {this.props.error}</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(reducers) {
  return {
    characters: reducers.charsReducer.characters,
    fetching: reducers.charsReducer.fetching,
    error: reducers.charsReducer.error
  }
}

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(CharacterListView);

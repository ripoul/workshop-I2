import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

class SearchBar extends React.Component {
  static propTypes = {
    onSearchResult: PropTypes.func
  };

  state = {
    search: ''
  };

  handleInputChange = ( event ) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  onClickSearch = () => {
    const api_host = process.env.API_HOST || '127.0.0.1';
    const url = `http://${api_host}/api/search`;

    axios
      .get( url, {
        params: {
          keyword: this.state.search
        }
      })
      .then(( response ) => {
        // Call callback with response
        if ( typeof this.props.onSearchResult === 'function' ) this.props.onSearchResult( response.data );
      });
  };

  render() {
    return (
      <div className="columns is-gapless">
        <div className="column is-four-fifths has-text-right">
          <input
            placeholder="Search"
            className="input is-rounded"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="column has-text-left">
          <button className="button is-primary is-outlined" type="button" onClick={this.onClickSearch}>
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

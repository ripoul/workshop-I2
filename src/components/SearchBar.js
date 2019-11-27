import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
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
    this.props.onSearch( this.state.search );
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

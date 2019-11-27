import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import PersonItem from 'components/PersonItem';
import axios from 'axios';

class IndexPage extends React.Component {
  state = {
    displayedResults: [],
    allResults: []
  };

  displayList = () => {
    return this.state.displayedResults.map(( content, index ) => <PersonItem key={index} content={content} /> );
  };

  onClickSearch = ( search ) => {
    this.setState({
      displayedResults: this.state.allResults.filter(( line ) => line.toUpperCase().includes( search.toUpperCase()))
    });
  };

  componentDidMount = () => {
    const api_host = 'https://workshop-epsi-i2.appspot.com';
    const url = `${api_host}/api/get_all`;

    axios.get( url ).then(( response ) => {
      // Call callback with response
      const list = response.data.map(( words ) => words.join( ' ' ));
      this.setState({
        allResults: list,
        displayedResults: list
      });
    });
  };

  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  render() {
    const searchLineStyle = {
      marginBottom: '3rem'
    };

    return (
      <Layout pageName="home">
        <Container className="content">
          <div className="columns" style={searchLineStyle}>
            <div className="column">
              <SearchBar onSearch={this.onClickSearch} />
            </div>
          </div>
          <div className="columns">
            <div className="column">{ this.displayList() }</div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;

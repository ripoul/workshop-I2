import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';
import SearchBar from 'components/SearchBar';
import axios from 'axios';

class IndexPage extends React.Component {
  state = {
    displayedResults: [],
    allResults: []
  };

  displayList = () => {
    const listItems = this.state.displayedResults.map(( p, i ) => <li key={i}>{ p }</li> );
    return <ul>{ listItems }</ul>;
  };

  onClickSearch = ( search ) => {
    this.setState({ displayedResults: this.state.allResults.filter(( line ) => line.includes( search )) });
  };

  componentDidMount = () => {
    const api_host = process.env.API_HOST || 'http://127.0.0.1:8000';
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
    return (
      <Layout pageName="home">
        <Container className="content">
          <Columns>
            <Column>
              <SearchBar onSearch={this.onClickSearch} />
            </Column>
          </Columns>
          <Columns>
            <Column>{ this.displayList() }</Column>
          </Columns>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;

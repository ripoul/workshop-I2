import React from 'react';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';
import SearchBar from 'components/SearchBar';

class IndexPage extends React.Component {
  state = {
    persons: []
  };

  onResultSearch = ( data ) => {
    this.setState({ persons: data });
  };

  PersonsList = () => {
    const listItems = this.state.persons.map(( p, i ) => <li key={i}>{ p.join( ' ' ) }</li> );
    return <ul>{ listItems }</ul>;
  };

  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  render() {
    return (
      <Layout pageName="home">
        <Container className="content">
          <Columns>
            <Column>
              <SearchBar />
            </Column>
          </Columns>
          <Columns>
            <Column>
              <this.PersonsList />
            </Column>
          </Columns>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;

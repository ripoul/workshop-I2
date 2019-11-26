import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

class Header extends React.Component {
  state = {
    links: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Webcam',
        link: '/webcam'
      },
      {
        text: 'Mass import',
        link: '/import'
      },
      {
        text: <FaGithub />,
        link: 'https://github.com/ripoul/workshop-I2'
      }
    ]
  };

  RenderLinks = () => {
    const items = this.state.links.map(( l, i ) => (
      <li key={i}>
        <Link to={l.link}>{ l.text }</Link>
      </li>
    ));
    return <ul>{ items }</ul>;
  };

  render() {
    return (
      <header>
        <Container>
          <Columns>
            <Column>
              <p>Workshop I2</p>
            </Column>
            <Column>
              <this.RenderLinks />
            </Column>
          </Columns>
        </Container>
      </header>
    );
  }
}

export default Header;

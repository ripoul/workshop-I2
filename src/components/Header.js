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
        link: 'https://github.com/ripoul/workshop-I2',
        external: true
      }
    ]
  };

  RenderLinks = () => {
    const items = this.state.links.map(( link, i ) => {
      const isExternal = link.external !== undefined && link.external === true;
      if ( isExternal ) {
        return (
          <li key={i}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              { link.text }
            </a>
          </li>
        );
      } else {
        return (
          <li key={i}>
            <Link to={link.link}>{ link.text }</Link>
          </li>
        );
      }
    });
    return <ul>{ items }</ul>;
  };

  render() {
    return (
      <header>
        <Container>
          <Columns>
            <Column>
              <p>
                <Link to="/">TalentMining</Link>
              </p>
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

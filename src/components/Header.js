import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

const Header = () => {
  return (
    <header>
      <Container>
        <Columns>
          <Column>
            <p>Workshop I2</p>
          </Column>
          <Column>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/webcam/">Webcam</Link>
              </li>
              <li>
                <a href="https://github.com/ripoul/workshop-I2">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </Column>
        </Columns>
      </Container>
    </header>
  );
};

export default Header;

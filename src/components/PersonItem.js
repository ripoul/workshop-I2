import React from 'react';
import PropTypes from 'prop-types';

class PersonItem extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  render() {
    const cardStyle = {
      marginBottom: '1.5rem'
    };

    return (
      <div className="card" style={cardStyle}>
        <div className="card-content">
          <div className="content has-text-left">{ this.props.content }</div>
        </div>
      </div>
    );
  }
}

export default PersonItem;

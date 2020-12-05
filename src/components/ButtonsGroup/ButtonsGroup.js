import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ButtonsGroup = ({children}) => {
  return (
    <div className="ButtonsGroup">
      {React.Children.map(children, (child) => (
        React.cloneElement(
          child,
          {className: 'ButtonsGroup__item'}
        )
      ))}
    </div>
  )
}

ButtonsGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default ButtonsGroup;
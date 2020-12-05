import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Button = ({children, mode, size, className, counter, ...props}) => {
  const classNames = classnames (
    'Button',
    {
      [`Button-${mode}`]: Boolean(mode),
      [`Button-${size}`]: Boolean(size),
    },
    className
  );

  return (
    <button className={classNames} {...props}>
      {children}
      {/*{Boolean(counter) && <span className="button__counter">{counter}</span>}*/}
      {typeof counter === 'number' && <span className="button__counter">{counter}</span>}
    </button>
  )
}

Button.defaultProps = {
  mode: 'primary',
  size: 'normal',
  className: '',
  counter: null
};

Button.propTypes = {
  counter: PropTypes.number,
  mode: PropTypes.oneOf(['primary','secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  className: PropTypes.string,
}

export default Button;
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import './style.css';



const ButtonsGroup = ({children}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);

  return (
    <div className="ButtonsGroup">
      {React.Children.map(children, (child, i) => (
        React.cloneElement(
          child,
          {className: classnames('ButtonsGroup__item', {'ButtonsGroup__item--active': activeButtonIndex === i}),
          onClick: () => {
              setActiveButtonIndex(i)
            }
          }
        )
      ))}
    </div>
  )
}

ButtonsGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export default ButtonsGroup;
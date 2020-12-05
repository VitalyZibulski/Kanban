import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Progress = ({percent}) => (
    <div className="Progress">
      <div className="Progress__percent" style={{ width: `${percent}%` }}/>
    </div>
)


Progress.propTypes = {
  percent: PropTypes.number.isRequired,
}

export default Progress;
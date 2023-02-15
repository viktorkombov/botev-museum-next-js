import React from 'react';

import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && classes['loading-spinner__overlay']} ${props.positionAbsolute && classes['position-absolute']}`}>
      <div className={classes['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default LoadingSpinner;

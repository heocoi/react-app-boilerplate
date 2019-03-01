import React from 'react';
import Button from '@material-ui/core/Button';

function ContainedButton(props) {
  const { children } = props;
  return (
    <div>
      <Button variant="contained">{children}</Button>
    </div>
  );
}

export default ContainedButton;

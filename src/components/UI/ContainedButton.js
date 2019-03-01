import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme.variants('mode', 'color', {
  default: { light: 'wheat' },
  primary: { light: 'crimson' }
});

const StyledButton = styled(Button)`
  && {
    margin: ${props => props.theme.spacing.unit + 'px'};
    background-color: ${backgroundColor};
  }
`;

function ContainedButton({ children, ...other }) {
  return (
    <StyledButton variant="contained" {...other}>
      {children}
    </StyledButton>
  );
}

ContainedButton.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary'])
};
ContainedButton.defaultProps = {
  color: 'default'
};

export default withTheme(ContainedButton);

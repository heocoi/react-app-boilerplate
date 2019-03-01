// @flow

import Button from "@material-ui/core/Button";
import React from "react";
import styled, { withTheme } from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme.variants("mode", "color", {
  default: { light: "wheat" },
  primary: { light: "crimson" }
});

const StyledButton = styled(Button)`
  && {
    margin: ${props => props.theme.spacing.unit + "px"};
    background-color: ${backgroundColor};
  }
`;

type Props = {
  color: "default" | "primary" | "secondary",
  children: any
};

function ContainedButton(props: Props) {
  const { children, ...other } = props;
  return (
    <StyledButton variant="contained" {...other}>
      {children}
    </StyledButton>
  );
}

ContainedButton.defaultProps = {
  color: "default"
};

export default withTheme(ContainedButton);

import { createMuiTheme } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ContainedButton from '../../components/UI/ContainedButton';

const theme = createMuiTheme({
  mode: 'light',
  typography: {
    useNextVariants: true
  }
});

storiesOf('ContainedButton', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <ContainedButton onClick={action('clicked')}>
        Hello Button
      </ContainedButton>
    </ThemeProvider>
  ))
  .add('with icon', () => (
    <ThemeProvider theme={theme}>
      <ContainedButton onClick={action('clicked')}>
        <KeyboardVoiceIcon />
        Talk
      </ContainedButton>
    </ThemeProvider>
  ))
  .add('variants', () => (
    <ThemeProvider theme={theme}>
      <div>
        <ContainedButton onClick={action('clicked')}>Default</ContainedButton>
        <ContainedButton onClick={action('clicked')} color="primary">
          Primary
        </ContainedButton>
        <ContainedButton onClick={action('clicked')} color="secondary">
          Secondary
        </ContainedButton>
      </div>
    </ThemeProvider>
  ));

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ContainedButton from '../../components/UI/ContainedButton';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

storiesOf('ContainedButton', module)
  .add('with text', () => (
    <ContainedButton onClick={action('clicked')}>Hello Button</ContainedButton>
  ))
  .add('with icon', () => (
    <ContainedButton onClick={action('clicked')}>
      <KeyboardVoiceIcon />
      Talk
    </ContainedButton>
  ));

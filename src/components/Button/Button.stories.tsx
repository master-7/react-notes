import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, color } from '@storybook/addon-knobs'

import { Button } from './Button'

storiesOf('Button', module)
  .add('Base button', () => <Button
    background={color('Background', '#44c767')}
    color={color('Text-color', '#ffffff')}
    onClick={action('on click!')}>{
    text('Text in button', 'Hello Button!')
  }</Button>)
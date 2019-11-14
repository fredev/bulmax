import { configure, addParameters } from '@storybook/react'

// @ts-ignore
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  colorPrimary: '#00d1b2',
  colorSecondary: 'deepskyblue',

  mainFill: 'black',

  // UI
  appBg: '#111',
  appContentBg: 'black',
  appBorderColor: 'black',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#00d1b2',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#00d1b2',
  barBg: '#00d1b2',

  // Form colors
  inputBg: 'white',
  inputBorder: '#00d1b2',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'Bixxxi storybook',
});

// Option defaults.
addParameters({
  options: {
    theme
  },
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);

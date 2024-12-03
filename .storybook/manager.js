import { addons } from '@storybook/manager-api';
import dsTheme from './DsTheme';

addons.setConfig({
  theme: dsTheme,
  sidebar: {
    showRoots: false
  }
});
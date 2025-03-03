import type { Preview } from '@storybook/react'
import withThemeProvider from '../src/stories/withThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider]
};

export default preview;
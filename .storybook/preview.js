/** @type { import('@storybook/html').Preview } */
import '../css/theme.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designToken: {
      defaultTab: 'Spacing',
      styleInjection:
        '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");'
    },
    options: {
      storySort: {
        order: ['Intro to The Design System', 'Tokens', ['Borders', 'Breakpoints', 'Colors', ['Brand', 'Actions', 'Backgrounds'], 'Corner Radii', 'Gradients', 'Grid', 'Spacing', 'Typography'], 'Components']
      }
    }
  },
};

export default preview;

A UI Kit codifying Design for developers made up of 3 parts: 

1. Theme URL: providing all the styles in a minified css file to include in the head of your app/website (here & URL coming soon)
2. Storybook instance for viewing tokens, components and other documentation
3. Components: encapsulated with styles and accessibility notes

Dev notes:
1. NPM install
2. To compile theme: `sass sass/:css/ --watch`
3. To compile both theme css and component css to their respective folders:  `npm run sass`
4. To build & run Storybook: `npm run storybook`
5. To run chromatic npm run chromatic

import type { Preview } from '@storybook/react';
import { RouterProvider, createMemoryHistory, createRootRoute, createRouter } from '@tanstack/react-router';
// import '../styles/styles';

const preview: Preview = {
  decorators: [
    (Story) => {
      return <RouterProvider router={
        createRouter({
          history: createMemoryHistory(),
          routeTree: createRootRoute({
            component: Story
          })
        })
      } />
    }
  ]
};

export default preview

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

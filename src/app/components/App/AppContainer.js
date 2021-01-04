import React from 'react';
import { RouterProvider } from 'react-router5';
import '@vkontakte/vkui/dist/vkui.css';
import { Provider } from 'react-redux';
import EBoundary from "../ErrorBoundary/EBoundary";

import App from "./App";


const AppContainer = ({ router, store }) => (
    <RouterProvider router={router}>
      <Provider store={store}>
        <EBoundary>
          <App />
        </EBoundary>
      </Provider>
    </RouterProvider>
);

export default AppContainer;


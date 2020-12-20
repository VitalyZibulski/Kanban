import React from 'react';
import { RouterProvider, useRoute } from 'react-router5';
import '@vkontakte/vkui/dist/vkui.css';
import EBoundary from "../ErrorBoundary/EBoundary";
import Context from "./context";
import { useAppState } from "./hooks";

import App from "./App";


const AppContainer = ({ router }) => {
  const state = useAppState();

  return (
    <RouterProvider router={router}>
      <Context.Provider value={state}>
        <EBoundary>
          <App />
        </EBoundary>
      </Context.Provider>
    </RouterProvider>
  );
};

export default AppContainer;


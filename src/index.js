import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
// import bridge from "@vkontakte/vk-bridge";
import * as backend from './api';
import * as router from './router';
import App from "./components/App/AppContainer";
import { reducer } from "./reducers/reducer";

// Init VK  Mini App
// bridge.send("VKWebAppInit");
const route = router.initialize();
backend.initialize();

const store = createStore(reducer);

ReactDOM.render(<App router={route} store={store}/>, document.getElementById("root"));

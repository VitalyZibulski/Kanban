import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { getStore } from "./app/store";

// import bridge from "@vkontakte/vk-bridge";
import * as backend from './api';
import * as router from './router';
import App from "./app/components/App/AppContainer";

// Init VK  Mini App
// bridge.send("VKWebAppInit");
const route = router.initialize();
backend.initialize();

const store = getStore();

ReactDOM.render(<App router={route} store={store}/>, document.getElementById("root"));

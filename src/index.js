import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";
import * as backend from './actions';
import * as router from './router';
import App from "./components/App/AppContainer";

// Init VK  Mini App
// bridge.send("VKWebAppInit");
const route = router.initialize();
backend.initialize();

ReactDOM.render(<App router={route} />, document.getElementById("root"));

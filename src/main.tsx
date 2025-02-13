import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import vkBridge from "@vkontakte/vk-bridge";

import { ru } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

import { store } from "./store/index.ts";

import App from "./App.tsx";

import "./index.css";

vkBridge.send("VKWebAppInit");

setDefaultOptions({ locale: ru });

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

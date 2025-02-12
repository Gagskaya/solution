import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { ru } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

import { store } from "./store/index.ts";

import App from "./App.tsx";

import "./index.css";

setDefaultOptions({ locale: ru });

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

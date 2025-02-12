import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import "./index.css";

import { ru } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";
setDefaultOptions({ locale: ru });

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

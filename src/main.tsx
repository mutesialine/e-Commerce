import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import AppReduxStore from "./redux-store/AppReduxStore.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={AppReduxStore}>
      <App />
    </Provider>
  </StrictMode>
);

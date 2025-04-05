import { createRoot } from "react-dom/client";
import "./App/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "App/App";
import { store } from "App/providers/StoreProvider";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

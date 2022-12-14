import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'tw-elements';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter } from "react-router-dom";
import "tw-elements";

// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

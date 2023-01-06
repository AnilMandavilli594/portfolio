import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './Main/Info';
import Home from './Home/Home';
import { Provider } from 'react-redux'
import store from './Store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"info",
    element:<Info />
  },
  {
    path:"home",
    element:<Home />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

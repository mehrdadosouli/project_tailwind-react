import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import CategoryContextProvider from "./context/CategoryContextProvider";
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(
        <BrowserRouter>
        <CategoryContextProvider>
            <App />
        </CategoryContextProvider>
        </BrowserRouter>
            )
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import store from "./redux/store";
import "./Assets/index.css";
import "./app.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

let websiteUrl = window.location.href;
let websiteTitle = websiteUrl.includes("tbardini")
  ? "TBardini's Portfolio"
  : "Thiago Bardini's Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{websiteTitle}</title>
          <meta property="og:title" content={websiteTitle} />
          <meta
            property="og:description"
            content="This is my portfolio website where I showcase my projects and skills, documenting my learning journey through various small and large projects."
          />
          <meta
            property="og:image"
            content={`${process.env.PUBLIC_URL}/logoNav.png`}
          />
          <meta property="og:url" content={websiteUrl} />
          <meta
            name="description"
            content="This is my portfolio website where I showcase my projects and skills, documenting my learning journey through various small and large projects."
          />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/tbtag.png`} />
        </Helmet>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);

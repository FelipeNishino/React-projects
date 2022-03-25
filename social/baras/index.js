import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FeedPage } from "./pages/Feed";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FeedPage />
  </StrictMode>,
  rootElement
);

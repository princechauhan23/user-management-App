import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/UserContext.jsx";

const conatiner = document.getElementById("root");
const root = ReactDOM.createRoot(conatiner);
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

import React from "react";
import { Provider } from "react-redux";
import store from "../state/store/store";
import AppRouter from "../router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { ThemeProvider } from "../context/ThemeContext/ThemeContext";

//wszystkie providery i wrappery tutaj
const App: React.FC = () => {
  console.log("----------------- XXXXXXX ======================");
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

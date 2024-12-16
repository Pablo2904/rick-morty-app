import React from "react";
import { Provider } from "react-redux";
import store from "../state/store/store";
import AppRouter from "../router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { ThemeProvider } from "../context/ThemeContext/ThemeContext";
import i18n from "components/molecules/LanguageToggle/i18n";
import { I18nextProvider } from "react-i18next";

//wszystkie providery i wrappery tutaj
const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;

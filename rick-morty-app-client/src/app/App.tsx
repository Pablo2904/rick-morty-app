import React from "react";
import { Provider } from "react-redux";
import store from "state/store/store";
import AppRouter from "router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.scss";
import { ThemeProvider } from "context/ThemeContext/ThemeContext";
import { CharacterList } from "components/molecules/CharacterList/CharacterList";

//wszystkie providery i wrappery tutaj
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CharacterList />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

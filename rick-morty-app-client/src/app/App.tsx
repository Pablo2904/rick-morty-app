import React from "react";
import { Provider } from "react-redux";
import store from "state/store/store";
import AppRouter from "router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.scss";
import { ThemeProvider } from "context/ThemeContext/ThemeContext";
import ErrorBoundary from "utilities/ErrorBoundary/ErrorBoundary";

const BuggyComponent = () => {
  throw new Error("Test error!");
  return <div>Oops!</div>;
};

//wszystkie providery i wrappery tutaj
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <AppRouter />
          <BuggyComponent />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

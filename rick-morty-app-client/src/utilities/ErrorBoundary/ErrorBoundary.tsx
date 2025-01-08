import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Interfejsy
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  // Update state
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>We had an error! </h1>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
          {/* <button onClick={() => navigate("/")}>Go back</button> */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

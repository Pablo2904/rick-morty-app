import path from "path";
import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Interfejsy
interface ErrorBoundaryProps {
  children: ReactNode;
  navigate: (path: number) => void;
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
        <div className="error-boundary">
          <p>We had an error! </p>
          <div className="error-boundary__buttons">
            <Button onClick={() => window.location.reload()}>
              Reload Page
            </Button>
            <Button onClick={() => this.props.navigate(-1)}>Go back</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

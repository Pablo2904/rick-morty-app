import ErrorBoundary from "./ErrorBoundary";
import withNavigate from "./withNavigate";

const EnhancedErrorBoundary = withNavigate(ErrorBoundary);

export default EnhancedErrorBoundary;

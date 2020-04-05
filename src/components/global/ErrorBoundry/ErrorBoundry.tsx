import { Component } from "react";

class ErrorBoundary extends Component<any, any> {
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    // TODO: logErrorToMyService(error, errorInfo);
    // TODO: show 500 with navigation
    // this.props.history.push("/500");
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;

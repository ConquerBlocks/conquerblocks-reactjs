import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error: ', error)
    console.log("ErrorInfo: ", errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Algo Mal Salió</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary


import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary capturou um erro:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          className="p-6 text-center bg-white text-red-600 rounded-xl shadow-md transition-colors duration-500"
        >
          <h2 className="text-2xl font-bold mb-4 transition-colors duration-500">
            Ops! Algo deu errado.
          </h2>
          <p className="mb-4 transition-colors duration-500">
            Um erro inesperado aconteceu. Tente recarregar a página ou voltar mais tarde.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Rattrape les erreurs de rendu — notamment l'échec de chargement d'un chunk
 * lazy (réseau instable) — pour éviter un écran blanc.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="font-mono text-sm text-primary mb-3">error · 500</div>
            <h1 className="text-2xl font-bold mb-2">Une erreur est survenue</h1>
            <p className="text-muted-foreground text-sm mb-6">
              Le chargement de la page a échoué. Vérifiez votre connexion puis réessayez.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

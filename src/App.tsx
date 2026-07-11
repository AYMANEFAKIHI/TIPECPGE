import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";

const Home = lazy(() => import("@/pages/Home"));
const CNC2026Page = lazy(() => import("@/pages/CNC2026"));
const Filieres = lazy(() => import("@/pages/Filieres"));
const EcolesPage = lazy(() => import("@/pages/Ecoles"));
const ConcoursPage = lazy(() => import("@/pages/Concours"));
const CalculateurPage = lazy(() => import("@/pages/Calculateur"));
const MethodologiePage = lazy(() => import("@/pages/Methodologie"));
const RessourcesPage = lazy(() => import("@/pages/Ressources"));
const EtudesDeCasPage = lazy(() => import("@/pages/EtudesDeCas"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const GuidesPage = lazy(() => import("@/pages/Guides"));
const GuideArticle = lazy(() => import("@/pages/GuideArticle"));
const MentionsLegales = lazy(() => import("@/pages/MentionsLegales"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      Chargement...
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="tipe-cpge-theme">
      <ErrorBoundary>
      <Suspense fallback={<RouteFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/cnc-2026" component={CNC2026Page} />
          <Route path="/filieres" component={Filieres} />
          <Route path="/ecoles" component={EcolesPage} />
          <Route path="/concours" component={ConcoursPage} />
          <Route path="/calculateur" component={CalculateurPage} />
          <Route path="/methodologie" component={MethodologiePage} />
          <Route path="/ressources" component={RessourcesPage} />
          <Route path="/etudes-de-cas" component={EtudesDeCasPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/guides" component={GuidesPage} />
          <Route path="/guides/:slug" component={GuideArticle} />
          <Route path="/mentions-legales" component={MentionsLegales} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

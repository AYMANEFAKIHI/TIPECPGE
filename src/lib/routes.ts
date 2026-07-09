import routesData from "@/lib/routes.data.json";

export interface RouteMeta {
  path: string;
  label: string;
  title: string;
  description: string;
  group: "main" | "cnc" | "tipe" | "legal";
}

// Source de vérité unique — partagée avec le script de prerender (scripts/prerender.mjs)
export const ROUTES: RouteMeta[] = routesData as RouteMeta[];

export const getRouteMeta = (path: string): RouteMeta =>
  ROUTES.find((r) => r.path === path) ?? ROUTES[0];

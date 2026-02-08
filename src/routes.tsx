import { lazy, Suspense } from "react";
import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "./RootLayout";

// Eagerly load critical components
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

// Lazy load secondary pages for better initial load performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const OurPeoplePage = lazy(() => import("./pages/OurPeoplePage"));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const GetInvolvedPage = lazy(() => import("./pages/GetInvolvedPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));

// Wrapper for lazy components
const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
    {children}
  </Suspense>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <LazyWrapper><AboutPage /></LazyWrapper>,
      },
      {
        path: "our-people",
        element: <LazyWrapper><OurPeoplePage /></LazyWrapper>,
      },
      {
        path: "programs",
        element: <LazyWrapper><ProgramsPage /></LazyWrapper>,
      },
      {
        path: "get-involved",
        element: <LazyWrapper><GetInvolvedPage /></LazyWrapper>,
      },
      {
        path: "gallery",
        element: <LazyWrapper><GalleryPage /></LazyWrapper>,
      },
      {
        path: "contact",
        element: <LazyWrapper><ContactPage /></LazyWrapper>,
      },
      {
        path: "privacy",
        element: <LazyWrapper><PrivacyPage /></LazyWrapper>,
      },
      {
        path: "disclaimer",
        element: <LazyWrapper><DisclaimerPage /></LazyWrapper>,
      },
      // Legacy URL redirects
      {
        path: "contact-us",
        element: <LazyWrapper><ContactPage /></LazyWrapper>,
      },
      {
        path: "members",
        element: <LazyWrapper><AboutPage /></LazyWrapper>,
      },
      {
        path: "partners",
        element: <LazyWrapper><GetInvolvedPage /></LazyWrapper>,
      },
      // Catch-all 404
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;

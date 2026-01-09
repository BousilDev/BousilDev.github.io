import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Cv from "./components/cv";
import Home from "./components/home";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import NavBar from "@/components/navbar";
import Prism from "@/components/Prism";
import { Outlet } from "react-router-dom";
import { CVData, profileCardProps, githubProps } from "@/utils/utils";

import Particles from "@/components/Particles";

const showSinglePage = true;
const showParticleBackground = true;

const PrismElem = () => {
  return (
    <Prism
      animationType="rotate"
      timeScale={0.5}
      height={3.5}
      baseWidth={5.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      noise={0.5}
      glow={1}
    />
  );
};

const ParticleElem = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

const Background = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {showParticleBackground ? <ParticleElem /> : <PrismElem />}
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Background />
      <NavBar visible={!showSinglePage} />
      <ModeToggle />
      <Outlet />
    </>
  );
};

const ErrorBoundary = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10 p-10 text-center">
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/oliver",
        element: (
          <Cv
            CVData={CVData}
            profileCardProps={profileCardProps[0]}
            githubProps={githubProps}
          />
        ),
      },
      {
        path: "/other",
        element: <div></div>,
      },
    ],
  },
]);

const singlePageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/",
        element: (
          <Cv
            CVData={CVData}
            profileCardProps={profileCardProps[0]}
            githubProps={githubProps}
          />
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={showSinglePage ? singlePageRouter : router} />
    </ThemeProvider>
  );
}

export default App;

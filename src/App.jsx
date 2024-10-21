import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/features/themeSlice";
import { setWindowWidth } from "./redux/features/utilsSlice";
import { LazyComponent as Lazy } from "./components";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Lazy component={<Home />} />,
      },
      {
        path: "/about",
        element: <Lazy component={<About />} />,
      },
      {
        path: "/contact",
        element: <Lazy component={<Contact />} />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    console.log("isDark Mode", isDarkMode);
    if (isDarkMode) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark", "custom"); // Remove any existing theme classes
    document.body.classList.add(theme); // Add the current theme class (light, dark, or custom)
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth)); // Update state on resize
    };

    window.addEventListener("resize", handleResize); // Add event listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  console.log("theme", theme);

  return <RouterProvider router={router} />;
}

export default App;

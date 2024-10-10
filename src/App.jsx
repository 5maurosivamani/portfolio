import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, ErrorPage, Home } from "./pages";
import Root from "./layout/Root";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "./redux/features/themeSlice";
import { setWindowWidth } from "./redux/features/utilsSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
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

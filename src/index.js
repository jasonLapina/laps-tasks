import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./UI/Layout";
import MySpinner from "./UI/MySpinner";
import { theme } from "./chakraTheme";
// import AddProject from "./Projects/AddProject";

const AddProject = lazy(() => import("./Projects/AddProject"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "add-new",
        element: (
          <Suspense fallback={<MySpinner />}>
            <AddProject />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);

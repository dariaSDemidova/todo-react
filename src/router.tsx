import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ToDoListPage />,
      },
      {
        path: "/list",
        element: <ViewList />,
      },
      {
        path: "/list/:id",
        element: <ViewListItem />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

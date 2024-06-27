import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import HomePage from "../pages/HomePage";
import MainPageLayout from "../layout/MainPageLayout";
import NewPost from "../pages/NewPostPage";

export const mainRoute = createBrowserRouter([
  {
    element: <Welcome />,
    path: "/",
  },

  {
    element: <MainPageLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "newpost",
        element: <NewPost />,
      },
    ],
  },
]);

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/Root";
import Home from "@/routes/Home";
import Quote from "@/routes/Quote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "quotes/:quoteId",
        element: <Quote />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

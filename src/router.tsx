import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Blog } from "./pages/Blog/Blog";
import { TradeFairs } from "./pages/TradeFairs/TradeFairs";
import { Main } from "./components/Main/Main";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/selected/1" replace={true} />
      },
      {
        path: 'selected/:newItemId',
        element: <Main />,
      },
      {
        path: 'selected/:newItemId/blog',
        element: <Blog />,
      },
      {
        path: 'selected/:newItemId/blog/tradeFairs',
        element: <TradeFairs />,
      },
    ]
  }
])

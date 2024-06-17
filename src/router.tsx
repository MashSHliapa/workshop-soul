import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

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
        element: <></>,
      },
    ]
  }
])

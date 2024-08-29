import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Blog } from "./pages/Blog/Blog";
import { TradeFairs } from "./pages/TradeFairs/TradeFairs";
import { Main } from "./components/Main/Main";
import { Contacts } from "./pages/Contacts/Contacts";
import { NewItems } from "./pages/NewItems/NewItems";
import { Catalog } from "./pages/Catalog/Catalog";
import { Festivals } from "./pages/Festivals/Festivals";

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
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/tradeFairs',
        element: <TradeFairs />,
      },
      {
        path: 'blog/festivals',
        element: <Festivals />,
      },
      {
        path: 'newItems/:newItemId',
        element: <NewItems />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ]
  }
])

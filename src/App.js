import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {loader as loadProducts} from './pages/HomePage';
import {loader as loadProduct} from './pages/DetailsPage';
import {action as registerAction} from './pages/RegisterPage';
import {action as loginAction} from './pages/LoginPage';
import {action as logoutAction} from './pages/Logout';
import {loader as loaderProductList} from './pages/ShopPage';
import {getListUser, checkLoginLoader} from './Util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: checkLoginLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loadProducts
      },
      {
        path: 'shop',
        element: <ShopPage />,
        loader: loaderProductList
      },
      {
        path: 'details/:productID',
        element: <DetailsPage />,
        loader: loadProduct
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: registerAction
      },
      {
        path: 'logout',
        action: logoutAction
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

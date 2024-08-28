import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Brands from './Components/Brands/Brands'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import NotFound from './Components/NotFound/NotFound'
import Products from './Components/Products/Products'
import AuthContextProvider from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProtectAuthRoutes from './Components/ProtectAuthRoutes/ProtectAuthRoutes'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Offers from './Components/Offers/Offers'
import SubCategories from './Components/SubCategories/SubCategories'
import { ToastContainer } from 'react-toastify'
import ForgetPasswords from './Components/ForgetPasswords/ForgetPasswords'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import WishList from './Components/WishList/WishList'
import ShippingAddress from './Components/ShippingAddress/ShippingAddress'
import Orders from './Components/Orders/Orders'
import ContactUs from './Components/ContactUs/ContactUs'
import ClientsReviews from './Components/ClientsReviews/ClientsReviews'
import VerifyCodePage from './Components/VerifyCodePage/VerifyCodePage'
import { WishlistProvider } from './Context/wishlistContext'
// import { Offline } from 'react-detect-offline'
import { CartProvider } from './Context/CartContext'
import OffersDetails from './Components/Offers/OffersDetails'




function App() {
  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'subcategories/:id', element: <ProtectedRoute><SubCategories /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'offers', element: <ProtectedRoute><Offers /></ProtectedRoute> },
        { path: 'wishlist', element: <ProtectedRoute><WishList /></ProtectedRoute> },
        { path: 'productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'offerDetails/:id', element: <ProtectedRoute><OffersDetails /></ProtectedRoute> },
        { path: 'shippingAddress/:cartId', element: <ProtectedRoute><ShippingAddress /></ProtectedRoute> },
        { path: 'allorders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: 'clientsReviews', element: <ProtectedRoute><ClientsReviews /></ProtectedRoute> },
        { path: 'contactUs', element: <ProtectedRoute><ContactUs /></ProtectedRoute> },
        { path: 'register', element: <ProtectAuthRoutes><Register /></ProtectAuthRoutes> },
        { path: 'login', element: <ProtectAuthRoutes> <Login /></ProtectAuthRoutes> },
        { path: 'forgetPasswords', element: <ProtectAuthRoutes> <ForgetPasswords /></ProtectAuthRoutes> },
        { path: 'resetPassword', element: <ProtectAuthRoutes> <ResetPassword /></ProtectAuthRoutes> },
        { path: 'verifyCode', element: <ProtectAuthRoutes> <VerifyCodePage /></ProtectAuthRoutes> },
        { path: '*', element: <NotFound /> },
      ]

    }

  ])


  return (
    <>
      <AuthContextProvider>
        <WishlistProvider>
          <CartProvider>
            <RouterProvider router={router}></RouterProvider>
            {/* <div className="fixed bg-[#7c005b] dark:bg-[#003783] text-white start-2 bottom-2 rounded-lg">
              <Offline>You are offline</Offline>
            </div> */}
          </CartProvider>

        </WishlistProvider>
        <ToastContainer />
      </AuthContextProvider>

    </>
  )
}

export default App


import MainSection from './pages/MainSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Components from "./components/Components";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import SingleProduct from "./pages/SingleProduct"
import CartProvider from "./pages/CartContext";



    const router=createBrowserRouter([
        {
          path: "/",
          element: <Components />,
          children: [
            { index: true, element: <MainSection /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact />},
            { path: "cart", element: <Cart /> },
            { path: "login", element: <Login /> },
            {path:"SingleProduct/:id",element: <SingleProduct />}
          ],
        },
      ])
  export default function App() {

  return (
    <>
       <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </>
  )
}

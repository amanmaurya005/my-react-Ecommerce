
import MainSection from './pages/MainSection'
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';
import Components from "./components/Components";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"




    const router=createBrowserRouter([
        {
          path: "./",
          Element: <Components />,
          Children: [
            { index: true, element: <MainSection /> },
            { path: "./about", element: <About /> },
            { path: "./contact", element: <Contact />},
            { path: "./cart", element: <Cart /> },
            { path: "./login", element: <Login /> },
          ],
        }
      ])
  export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

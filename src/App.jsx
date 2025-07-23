import Home from './pages/home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import AppLayout from './components/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router';





export default function App() {
  const router =  createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

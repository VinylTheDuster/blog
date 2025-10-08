import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";

import './styles/main.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/errors/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog />},
      { path: '/about', element: <About /> },
      { path: '/admin', element: <Admin /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Contact } from './Contact_us.jsx';
import Projects from './Projects.jsx';
import { Socials } from './Socials.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path : "/Projects",
    element: <Projects/>
  },
  {
    path : "/Socials",
    element: <Socials/>
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

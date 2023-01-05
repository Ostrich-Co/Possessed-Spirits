import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom"
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     <App />
//   </React.StrictMode>,
// )

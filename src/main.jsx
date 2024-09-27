import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import MainLayout from './layout/MainLayout';
import EditUser from './pages/EditUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/userList",
          element:  <UserList/>,
        },
        {
          path: '/editData/:id',
          element: <EditUser/>,
        },
        {
          path: "/addUser",
          element:  <AddUser/>,
        },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

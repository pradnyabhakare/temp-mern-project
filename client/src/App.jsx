import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  DashboardLayout,
  Landing,
  Register,
  Error,
  Login,
  Profile,
  AllJobs,
  Stats,
  AddJob,
  Admin,
  EditJob
} from './pages';

import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import { loader as dashboardloader} from './pages/DashboardLayout';
import {action as addJobAction} from './pages/AddJob';
import { loader as allJobLoader} from './pages/AllJobs';
import {action as editJobAction} from './pages/EditJob';
import { loader as editJobLoader} from './pages/EditJob';
import {action as deleteJobAction} from './pages/DeleteJob';
import { loader as adminloader} from './pages/Admin';
import {action as profileAction} from './pages/Profile';
import { loader as statsloader} from './pages/Stats';




export const checkDefaultTheme = () =>{
  const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomeLayout/>,
    errorElement:<Error/>,
    children:[
  {
    index: true,
    element: <Landing/>
  },
  {
    path : '/dashboard',
    element : <DashboardLayout/>,
    loader: dashboardloader,
    children:[
      {
        index:true,
        element:<AddJob/>,
        action: addJobAction
      },
      {
        path:'all-jobs',
        element: <AllJobs/>,
        loader: allJobLoader
      },
      {
        path:'stats',
        element: <Stats/>,
        loader: statsloader
      },
      {
        path:'profile',
        element: <Profile/>,
        action: profileAction
      },
      {
        path:'admin',
        element: <Admin/>,
        loader: adminloader
      },
      {
        path:'edit-job/:id',
        element: <EditJob/>,
        loader: editJobLoader,
        action: editJobAction
      },
      {
        path: 'delete-job/:id', 
        action: deleteJobAction
      },
    ]
  },
  {
    path : '/register',
    element : <Register/>,
    action: registerAction,
  },
  {
    path : '/login',
    element : <Login/>,
    action: loginAction
  },
]
},
]);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;
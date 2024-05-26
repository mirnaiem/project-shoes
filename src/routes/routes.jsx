import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";




export const router = createBrowserRouter([
 {
  path:'*',
  element:<div>Not found</div>
 },
 {
   path: "/",
   element: <MainLayout/>,
   children:[
    {
     path:'/',
     element:<Home/>
    },
    
    {
     path:'about',
     element:<About/>
    },
   ]
   
 },
 {
path:'',
element:<DashboardLayout/>,
children:[{
 path:'dashboard',
 element:<Dashboard/>
}]
 },
 {
  path:'login',
  element:<Login/>
 },
 {
  path:'register',
  element:<Register/>
 },
]);
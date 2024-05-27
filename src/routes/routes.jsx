import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Private from "./private/Private";
import SeeDetails from "../components/SeeDetails";
import AllProducts from "../components/AllProducts";
import AddProducts from "../pages/AddProducts";
import UpdateProduct from "../pages/UpdateProduct";




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
     element:<Home/>,
     loader:()=>fetch('http://localhost:3000/shoes')
    },
    {
      path:'/details/:id',
      element:<SeeDetails/>,
      loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
     },
    
    {
     path:'about',
     element:<About/>
    },
    {
      path:'login',
      element:<Login/>
     },
     {
      path:'register',
      element:<Register/>
     },
   ]
   
 },
 {
path:'',
element:<DashboardLayout/>,
children:[
  {
 path:'dashboard',
 element:<Private><Dashboard/></Private>
},
  {
 path:'allproducts',
 element:<Private><AllProducts/></Private>,
},
  {
 path:'addproducts',
 element:<Private><AddProducts/></Private>,
},
  {
 path:'updateproducts/:id',
 element:<Private><UpdateProduct/></Private>,
 loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
},
]
 },

]);
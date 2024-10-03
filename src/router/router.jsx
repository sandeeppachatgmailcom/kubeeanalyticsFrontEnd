import { createBrowserRouter } from "react-router-dom"; 
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import Menulist from "../components/HomePage/MenuList";
import DashBoard from "../components/DashBoard/DashBoard";
import Profile from "../pages/Profile";
import MyTask from "../pages/MyTask";
import Notification from "../pages/Notification";
import Help from "../pages/Help";
import Products from "../pages/products";
import Client from "../pages/Client";



const appRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/homePage',
            element:<HomePage/>,
            children:[
                {
                    path:'',
                    element:<></> 
                    
                },
                {
                    path:'DashBoard',
                    element:<DashBoard/>
                },
                {
                    path:'Profile',
                    element:<Profile/>
                },
                {
                    path:'Mytask',
                    element:<MyTask/>
                },
                {
                    path:'Notifications',
                    element:<Notification/>
                },
                {
                    path:'Help',
                    element:<Help/>
                },
                {
                    path:'products',
                    element:<Products/>
                } ,
                {
                    path:'client',
                    element:<Client/>
                } 
                
            ]
        }, 
    ]
    
}]) 


export default appRouter

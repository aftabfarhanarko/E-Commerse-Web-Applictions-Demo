import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
     {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                
            }
        ]
     }
])
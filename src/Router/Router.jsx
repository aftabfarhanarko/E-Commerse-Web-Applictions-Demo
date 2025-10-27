import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";

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
              path:'/card',
              loader: () => fetch("/fack.json"),
              element:<Cart></Cart>  
            }
        ]
     }
])
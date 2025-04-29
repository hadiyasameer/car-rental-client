import {createBrowserRouter} from "react-router-dom"
import Homepage from "../pages/user/Homepage"
import Userlayout from "../layout/Userlayout"
import About from "../pages/user/About"
import Contact from "../pages/user/Contact"
import Cars from "../pages/user/Cars"
import Login from "../pages/shared/Login"
import SignUp from "../pages/user/SignUp"

export const router=createBrowserRouter([
    {
        path:"",
        element:<Userlayout/>,
        children:[
            {
                path:"/",
                element: <Homepage/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"cars",
                element:<Cars/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<SignUp/>
            }

        ]
    }
])
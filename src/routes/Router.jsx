import {createBrowserRouter} from "react-router-dom"
import Homepage from "../pages/user/Homepage"
import Userlayout from "../layout/Userlayout"
import About from "../pages/user/About"
import Contact from "../pages/user/Contact"

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
            }

        ]
    }
])
import {createBrowserRouter} from "react-router-dom"
import Homepage from "../pages/user/Homepage"
import Userlayout from "../layout/Userlayout"
import About from "../components/user/About"

export const router=createBrowserRouter([
    {
        path:"",
        element:<Userlayout/>,
        children:[
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element:<h1>Contact</h1>
            },

        ]
    }
])
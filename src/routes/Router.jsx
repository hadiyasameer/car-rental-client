import { createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/user/Homepage"
import Userlayout from "../layout/Userlayout"
import About from "../pages/user/About"
import Contact from "../pages/user/Contact"
import Cars from "../pages/user/Cars"
import Login from "../pages/shared/Login"
import SignUp from "../pages/user/SignUp"
import ViewCar from "../components/car/ViewCar"
import Booking from "../pages/user/Booking"
import BookingSuccess from "../pages/user/BookingSuccess"
import Adminlayout from "../layout/Adminlayout"
import Home from "../pages/admin/Home"
import AdminBookings from "../pages/admin/AdminBookings"

export const router = createBrowserRouter([
    {
        path: "",
        element: <Userlayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "cars",
                element: <Cars />
            },
            {
                path: "booking",
                element: <Booking />
            },

            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "viewCar/:id",
                element: <ViewCar />
            },
            {
                path: "payment/success",
                element: <BookingSuccess />
            },

        ]
    },
    {
        path: "admin",
        element: <Adminlayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path:"cars",
                element:<Cars />
            },
            {
                path: "viewCar/:id",
                element: <ViewCar />
            },
            {
                path: "bookings",
                element: <AdminBookings />
            },
            
        ]
    }
])
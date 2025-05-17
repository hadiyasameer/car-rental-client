import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import React, { useEffect, useState } from 'react'
import { MdOutlineBrightness2 } from "react-icons/md"
import { BsBrightnessHigh } from "react-icons/bs"
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [darkMode])
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)

  // }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-zinc-800 h-screen w-full`}>
      <div className="bg-zinc-100 dark:bg-red-950 p-2 rounded-xl">
        <RouterProvider router={router} />

        <button
          onClick={toggleDarkMode}
          className="fixed lg:top-20 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-yellow-500 shadow-lg hover:bg-zinc-600 transition text-white text-lg"
        >
          {darkMode ? <BsBrightnessHigh /> : <MdOutlineBrightness2 />}
        </button>
      </div>
    </div>
  );
}


export default App

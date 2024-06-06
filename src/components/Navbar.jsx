import React, { useState } from "react"
import logo from "../assets/image1.png"
import logo2 from "../assets/image2.png"
import logo3 from "../assets/image3.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoMoon } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { GoSun } from "react-icons/go"
import { useTheme } from "../hooks"

const Navbar = () => {
  const [sun, setSun] = useState(false)
  const { toggleTheme } = useTheme()
  const scrollToDiv = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center m-8 h-[4rem]">
        <img
          className="mx-2 w-10 transition duration-300 transform hover:scale-125 cursor-pointer hidden dark:block  "
          src={logo}
          alt="logo"
          onMouseOver={(e) => (e.currentTarget.src = logo2)}
          onMouseOut={(e) => (e.currentTarget.src = logo)}
        />
        <img
          className="mx-2 w-10 transition duration-300 transform hover:scale-125 cursor-pointer dark:hidden "
          src={logo3}
          alt="logo"
        />
      </div>
      <div className="flex justify-between items-center w-[45%] your-class">
        <a
          href="#"
          className="text-slate-900 cursor-pointer dark:text-white hover:underline "
        >
          Home
        </a>
        <a
          href="#"
          className="text-slate-900 cursor-pointer dark:text-white hover:underline "
          onClick={() => scrollToDiv("about")}
        >
          About
        </a>
        <a
          href="#"
          className="text-slate-900 cursor-pointer dark:text-white hover:underline "
          onClick={() => scrollToDiv("pro")}
        >
          Projects
        </a>
        <a
          href="#"
          className="text-slate-900 cursor-pointer dark:text-white hover:underline  "
          onClick={() => scrollToDiv("exp")}
        >
          Experience
        </a>
        <a
          href="#"
          className="text-slate-900 cursor-pointer dark:text-white hover:underline "
          onClick={() => scrollToDiv("contact")}
        >
          Contact
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div
          className="size-10 flex justify-center items-center rounded-3xl hover:bg-gray-600 mr-3 transition duration-300 ease-in-out cursor-pointer no-select"
          onClick={() => {
            setSun(!sun)
            toggleTheme()
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {sun ? (
            <GoSun className="text-orange-400" />
          ) : (
            <IoMoon className="dark:text-white" />
          )}
        </div>

        <FaLinkedin className="transition duration-300 transform hover:scale-125 cursor-pointer  hover:text-blue-600 dark:text-white text-black" />

        <FaGithub className="transition duration-300 transform hover:scale-125 cursor-pointer dark:text-white text-black" />
        <FaInstagram className="transition duration-300 transform hover:scale-125 cursor-pointer  hover:text-pink-600 dark:text-white text-black" />
        <FaSquareXTwitter className="transition duration-300 transform hover:scale-125 cursor-pointer dark:text-white text-black" />
      </div>
    </nav>
  )
}

export default Navbar

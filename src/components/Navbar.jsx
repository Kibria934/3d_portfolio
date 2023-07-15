import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { styles } from "../styles"
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';




const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(true)
  const navLinks = [ // Navigation address
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  //------------Common navbar for responsive-----------
  const navFunc = (toggleMode = false) => {
    const contents = navLinks.map((nav) => (
      <li
        key={nav.id}
        className={`${active === nav.title ? styles.activeStyle : "text-secondary"} ${styles.nav_li_commonStyle}`}
        onClick={() => {
          setActive(nav.title)
          if (toggleMode === true) {
            setToggle(!toggle)
          }
        }}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))
    return contents;
  }


  return (
    <nav className={`flex ${styles.paddingX} z-20 h-16 items-center py-5 fixed left-0 mx-auto  w-full top-0 bg-primary`}>
      <div className='flex justify-between items-center w-full max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex flex-wrap justify-center  items-center gap-2 '
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img
            className='object-contain w-12'
            src={logo}
            alt="logo"
          />
          <p className='text-white text-[18px]' > Kibria
            <span className=''> Hossain </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navFunc()}
        </ul>
        {/*----------- Hamburger icon toggling--------- */}
        <div className='sm:hidden'>
          <p onClick={() => {
            setToggle(!toggle)
          }} className='text-white z-30 block active:scale-75 active:border-red-500 active:border-2 active:rounded-full   text-2xl font-medium cursor-pointer p-2'>
            {toggle ? <HiMenuAlt2 /> : <AiOutlineClose />}
          </p>
        </div>

        {/*--------------- For small size navbar----------- */}
        <div className={`${toggle || window.innerWidth > 638 ? "hidden" : "flex"}  absolute top-16 right-0 min-w-[150px] leading-8 bg-gradient-to-r from-black-200 rounded-2xl to-cyan-900
          p-6 z-10 flex-col justify-center items-center`}>
          <ul>
            {
              navFunc(true)
            }
          </ul>
        </div>
      </div>

    </nav >
  )
}

export default Navbar
import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f]'>
            <div >
               <a href="https://drive.google.com/file/d/1Qpw-yjsvPybben9veDKBQr08PwsW-bsZ/view?usp=sharing" className='text-[#8892b0] pl-5 font-extrabold text-2xl hover:scale-110 duration-500 hover:text-pink-600'>Resume</a>
            </div>
            {/* menu */}

            <ul className='hidden md:flex text-white justify-center items-center gap-10 px-4' >
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li><Link to="about" smooth={true} duration={500} >
                    About
                </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link></li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link></li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobilemenu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-[#0a192f] text-white text-4xl gap-6'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* socil icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/saqlain-shahbaz/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/saqlain512'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1Qpw-yjsvPybben9veDKBQr08PwsW-bsZ/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

        </div>
    )
}

export default Navbar


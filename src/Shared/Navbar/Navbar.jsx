import { useState } from "react";
import YellowButton from "../../Components/YellowButton";
import "../../Shared/sharedBg.css"
// logo
 import logo from "../../assets/logo.png"

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
      
    };
  
    return (
        <div className="navbar bg-gradient lg:px-16 text-white z-10 fixed  py-4  ">
            <div className="navbar-start">
                {/* <div className="dropdown ">
                    <div tabIndex={0} role="button" onClick={toggleDropdown}
                     className="btn btn-ghost  lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                   {isDropdownOpen && <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Client</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>}
                </div> */}
                <div className="lg:hidden">
                <a className="btn btn-ghost text-xl">
                  <img className="w-10 h-10" src={logo} alt="" />  <span> Restaurant</span></a>
                </div>
                <div className="hidden lg:block">
                <a className=" btn btn-ghost text-xl">
                <img className="w-10 h-10" src={logo} alt="" />  <span> Restaurant</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Client</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
             <div className="navbar-end   ">
                {/* <div className="lg:hidden">
                <a className="btn btn-ghost text-xl">
                  <img className="w-10 h-10" src={logo} alt="" />  <span> Restaurant</span></a>
                </div> */}
                {/* dropdown */}
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <div tabIndex={0} role="button" onClick={toggleDropdown}
                     className="btn btn-ghost  lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                   {isDropdownOpen && <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Client</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>}
                </div>
                
                 <div className="hidden lg:block">
                 <YellowButton className="" text="book a table"></YellowButton>
                 </div>
            </div>   
        </div>
    );
};

export default Navbar;
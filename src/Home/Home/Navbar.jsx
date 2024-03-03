import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
const Navbar = () => {
    const Navbar = <>
    <li><a > Product <IoIosArrowDown /></a> </li>
    <li><a >Solutions <IoIosArrowDown /></a></li>
    <li><a >Resources <IoIosArrowDown /></a></li>
    <li><a >Enterprise </a></li>
    <li><a >Price </a></li>
    </>
  return (
    <div className="border-b-2">
        <div className="navbar bg-base-100 ">
    <div className="navbar-start ">
    <a className="font-bold text-xl ml-6"><svg width="91" height="32" viewBox="0 0 91 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_345)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5113 0.918836C38.2772 2.1019 38.2772 4.12974 39.5113 5.35423C40.7454 6.57935 42.7882 6.57935 44.0223 5.35423C45.2558 4.12974 45.2558 2.1019 44.0223 0.918836C42.7882 -0.306279 40.7454 -0.306279 39.5113 0.918836ZM64.3065 9.2083L61.4128 9.67274C55.8926 10.9214 52.3061 12.7105 52.3061 18.7254V30.7947L57.3279 31.8083V19.4792C57.3279 16.6684 58.9265 15.3988 61.4128 14.9294L64.3065 14.4031V9.2083ZM26.0854 30.8442L31.1073 31.8578V18.2133C31.1073 11.6653 26.0007 9.29983 22.4684 9.29983C20.0855 9.29983 18.2135 9.89105 16.5109 11.5386C14.7665 9.89105 12.6814 9.25778 10.9788 9.25778C8.55352 9.25778 6.42542 10.3134 5.02122 12.0036V9.72222L0 10.6938V30.8442L5.02122 31.8578V18.0018C5.02122 15.8051 6.63848 14.2423 9.06437 14.2423C11.4473 14.2423 13.0645 15.8051 13.0645 18.0018V30.8442L18.0857 31.8578V18.0018C18.0857 15.8051 19.7024 14.2423 22.0859 14.2423C24.4688 14.2423 26.0854 15.8051 26.0854 18.0018V30.8442ZM91 20.6079C91 26.8905 85.8529 32 79.5664 32C73.2376 32 68.0905 26.8905 68.0905 20.6079C68.0905 14.3673 73.2376 9.25778 79.5664 9.25778C85.8529 9.25778 91 14.3673 91 20.6079ZM79.5664 27.2671C75.8958 27.2671 72.8999 24.2937 72.8999 20.6079C72.8999 16.9641 75.8958 14.0321 79.5664 14.0321C83.237 14.0321 86.19 16.9641 86.19 20.6079C86.19 24.2937 83.237 27.2671 79.5664 27.2671ZM44.2347 32L39.2135 30.8442V10.5503L44.2347 9.53669V32Z" fill="#050038"/>
</g>
<defs>
<clipPath id="clip0_1_345">
<rect width="91" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</a>
      <div className="dropdown">
        <div tabIndex={0}  className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

         {
            Navbar
         }

        </ul>
        <div className=" hidden lg:flex">
      <ul className="menu menu-horizontal px-1">

        {
            Navbar
        }

      </ul>
    </div>
      </div>
      
    </div>
    <div className="navbar-end ">
    <a className="mr-4"><TbWorld className="inline text-2xl mr-1"/>EN </a>
    <p className="mr-4">Contact Sales</p>
     <Link className="mr-4" to='/login'>Login</Link>
    
    </div>
  </div>
    </div>
  );
};

export default Navbar;

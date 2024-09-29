import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
    <li><NavLink to="/pagesRead">Pages to Read</NavLink></li>
    <li><NavLink to="/user">Users</NavLink></li>

    
    </>


    return (
      <div className="navbar bg-base-100 w-[100%] m-auto lg:mt-[68px] mt-6 lg:w-[90%] mx-auto">
        <div className="navbar-start max-sm:w-[45%]">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box lg:w-52">
             {links}
            </ul>

          </div>
          <a className="btn btn-ghost text-[#131313] lg:text-[28px]">Book Vibe</a>
        </div>

        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {links}
          </ul>
        </div>
        <div className="lg:navbar-end lg:gap-4 gap-2 ">
          <a className="btn text-[#FFF] text-[18px] bg-[#23BE0A] ">Sign In</a>
          <a className="btn text-[#FFF] text-[18px] bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    );
};

export default Header;
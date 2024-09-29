import React from "react";
import { Link } from "react-router-dom";
import photo from '../../../public/Banner-photo/Banner-image.png';


const Banner = () => {
  return (

    <div className=" w-[90%] max-sm:my-10 mx-auto">
      <div className="hero md:min-h-48 md:my-16 md:py-10 max-sm:py-10 rounded-2xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/TwHHSLKj/pngwing-1.png" className="md:max-w-sm max-w-[200px]" />
          <div className="">
            <h1 className="md:text-6xl text-3xl font-extrabold md:mb-20 mb-5">Books to freshen up<br></br>your bookshelf</h1>
            <Link to="/listedBooks"><button className="btn font-bold md:pt-6 rounded-2xl md:px-8 md:pb-12 text-white hover:bg-black bg-red-500 text-xl">View The List</button></Link>
          </div>
        </div>
      </div>
    </div>




    // <div className=" w-[90%] flex md:gap-10 gap-2 mt-5 items-center md:mt-10 m-auto p-5 rounded-xl   bg-[#F3F3F3]">
    //   <div className="banner-details lg:mt-[136px]">
    //     <h2 className="text-[#131313]  lg:text-[56px] text-xl font-bold mb-5  ">Books to freshen up<br /> your bookshelf</h2>

    //   <div>
    //    <Link to="/listedBooks">
    //    <button className="btn btn-primary lg:mt-[48px] ">View The List</button>
    //    </Link>
    //   </div>

    //   </div>

    // <div className="banner-img lg:mt-20">
    //     <img src={photo} alt="" />
    // </div>

    // </div>
  );
};

export default Banner;

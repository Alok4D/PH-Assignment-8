import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="banner mt-10 flex gap-20 bg-[#F3F3F3] h-[554px] w-[90%] mx-auto px-[120px] rounded-[24px]">
      <div className="banner-details mt-[136px]">
        <h2 className="text-[#131313] text-[56px]">Books to freshen up<br /> your bookshelf</h2>

      <div>
      
       <Link>
       <button className="btn btn-primary mt-[48px]">View The List</button>
       </Link>
       
      </div>

      </div>

    <div className="banner-img mt-20">
        <img src="../../../public/assest/Banner-image.png" alt="" />
    </div>

    </div>
  );
};

export default Banner;

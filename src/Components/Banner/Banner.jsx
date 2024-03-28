import React from "react";
import { Link } from "react-router-dom";
import photo from '../../../public/Banner-photo/Banner-image.png';


const Banner = () => {
  return (
    <div className="banner  mt-10 lg:flex gap-20 bg-[#F3F3F3] h-[554px] w-[90%] mx-auto lg:px-[120px] rounded-[24px]">
      <div className="banner-details mt-[136px]">
        <h2 className="text-[#131313] lg:text-[56px] ">Books to freshen up<br /> your bookshelf</h2>

      <div>
      
       <Link to="/listedBooks">
       <button className="btn btn-primary mt-[48px]">View The List</button>
       </Link>
       
      </div>

      </div>

    <div className="banner-img lg:mt-20">
        <img src={photo} alt="" />
    </div>

    </div>
  );
};

export default Banner;

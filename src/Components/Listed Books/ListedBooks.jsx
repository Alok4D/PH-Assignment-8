import { MdStarBorder } from "react-icons/md";
import React from 'react';
import { Link } from "react-router-dom";


const ListedBooks = ({ bookList }) => {
   const{id, bookName, author, image, rating, category, tags} = bookList;
    return (


      <Link to={`/cardDetails/${id}`}>

      <div className="card bg-base-100 border shadow-xl mt-8 ">
  
  <figure className=" bg-slate-300 m-5 border rounded-lg">
    <img src={image} alt="Shoes" className="rounded-xl h-[350px] p-5 "/>
  </figure>

  <div className="p-8">

      <div className="flex gap-12">
          <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[20px] p-[5px]">#{tags[1]}</p>
          <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[20px] p-[5px]">#{tags[2]}</p>
      </div>


   <div className="border-b-2 border-dashed mt-2">
   <h2 className=" text-[#131313] text-[24px]">{bookName}</h2>
    <p className="mb-[20px] mt-[16px] text-[16px] text-[#131313]">By : {author}</p>
   </div>

    <div className="flex justify-between mt-[20px]">
     <div>
     <h2>{category}</h2>
     </div>
    <div className="flex justify-center items-center gap-4 ">
    <span>{rating}</span>
      <MdStarBorder></MdStarBorder>
    </div>
    </div>
    
  </div>
      </div>

      </Link>


    );
};

export default ListedBooks;
import { MdStarBorder } from "react-icons/md";
import React from 'react';

const ListedBooks = ({ bookList }) => {
   const{bookName, bookId} = bookList;
    return (
      <div className="book-card grid grid-cols-3">
<div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
  <div className="card-body items-center text-center">

<div className="flex gap-3">
    <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[30px] p-[5px]">Young Adult</p>
    <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[30px] p-[5px]">Identity</p>
</div>


   <div className="border-b-2 border-dashed mt-2">
   <h2 className="card-title text-[#131313] text-[24px]">The Catcher in the Rye</h2>
    <p className="mb-[20px] mt-[16px] text-[16px] text-[#131313]">By : Awlad Hossain</p>
   </div>

    <div className="flex gap-40 mt-[20px]">
     <div>
     <h2>Fiction</h2>
     </div>
    <div className="flex justify-center items-center gap-4 ">
    <span>5.00</span>
      <MdStarBorder></MdStarBorder>
    </div>
    </div>



  </div>
</div>
</div>
    );
};

export default ListedBooks;


import React, { useEffect, useState } from "react";
import ListedBooks from "../Listed Books/ListedBooks";


const Book = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  console.log(book);

  return (
    <div>

      <div className="mt-[100px]">
        <h2 className="text-[#131313] text-[40px] text-center">
          Books {book.length}
        </h2>
      </div>

  <div>
        {
        book.map(booksList => <ListedBooks bookList={booksList}></ListedBooks>)  
        }
    </div> 



    </div>
  );
};

export default Book;


  /* <div className="book-card">
<div className="card w-96 bg-base-100 shadow-xl">
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
</div> */


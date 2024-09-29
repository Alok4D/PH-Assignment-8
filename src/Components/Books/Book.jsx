import React, { useState } from "react";
import ListedBooks from "../Listed Books/ListedBooks";
import Banner from '../Banner/Banner';
import Hooks from "../View The List/Hooks/Hooks";



const Book = () => {
  const [book, setBook] = useState([]);

  const {data, loading} = Hooks();

  return (
    <div>
      <Banner></Banner>

      <div className="mt-[100px]">
        <h2 className="text-[#131313] text-[40px] text-center">
          Books 
        </h2>
      </div>

  <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 w-[90%] mx-auto">
        {
        data.map(booksList => <ListedBooks key={booksList.id} bookList={booksList}></ListedBooks>)  
        }
    </div> 

    </div>
  );
};

export default Book;


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { SaveToLocalStroage, setToLocalWishlist  } from '../Utility/LocalStorage';
import Hooks from "../View The List/Hooks/Hooks";

const CardDetails = () => {
    const [singleData, setSingleData] = useState();
    console.log(singleData);


    const {id} = useParams();
    const {data, loading} = Hooks();
    useEffect(() => {
        if (data) {
          const singleData = data?.find((item) => item.id == id);
          setSingleData(singleData);
        }
      }, [data, id]);

   
    const handleReadData = () => {
        
        SaveToLocalStroage(job);
       
    }
    const handleWishlist = () => {
        setToLocalWishlist(job);
    }
    const {author, bookName, image, review, totalPages, publisher, yearOfPublishing, rating, category, tags} = singleData || {};
    
        // const allBooks = useLoaderData();
        // const {bookId} = useParams();
        // const idInt = parseInt(bookId);
        // const job = allBooks.find(u => u.bookId == idInt);
        // console.log(job);
        // const {author, bookName, image, review, totalPages, publisher, yearOfPublishing, rating, category, tags} = job;


    // const allBooks = useLoaderData();
    // console.log(allBooks)
    // const {bookId} = useParams();
    // const user = allBooks.find((u)=>u.bookId == bookId)
    // console.log(user)
    // const {author, bookName, image} = job;


    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 mt-[52px] w-[90%] mx-auto ">
            
            <div className="flex justify-center items-center bg-slate-300 border rounded-[16px]">
                <img src={image} alt="Shoes" className="p-12 w-[500px]"/>
            </div>

        <div className="c-details">
            <h2 className="text-[#131313] text-[40px]">{bookName}</h2>
            <span className="text-[#646262] text-[20px]">By : {author}</span>
            <hr className="mt-2" />
            <h3 className="mt-2 mb-2">{category}</h3>
            <hr />
            <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Review: </span>{review}</p>
            <p></p>

            <div className="mt-2 flex gap-5  "> 
                <p className="text-[#131313] text-[16px] p-[5px]">Tag</p>
                <div className="flex gap-4">
                {tags &&
                tags.map((tag, index) => (
                  <h1
                    key={index}
                    className="flex justify-center items-center w-[123px] h-[33px] rounded-[30px] bg-[#23BE0A0D] text-[#23BE0A]"
                  >
                    #{tag}
                  </h1>
                ))}
                </div>
                {/* <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[20px] p-[5px]">#{}</p>
                <p className="text-[16px] text-[#23BE0A] bg-[#f8f7f7] border rounded-[20px] p-[5px]">#{}</p> */}
            </div>

        <div className="flex gap-[65px] mt-4">
           <div className="text-[16px] text-[#646262]">
           <p>Number of Pages:</p>
            <p className="mt-2 mb-2">Publisher:</p>
            <p>Year of Publishing:</p>
            <p className="mt-2 mb-2">Rating:</p>
           </div>
           <div className="text-[16px] text-[#646262]">
            <p>{totalPages}</p>
            <p  className="mt-2 mb-2">{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p  className="mt-2 mb-2">{rating}</p>
           </div>
        </div>

        <div className="flex gap-3">
           <button onClick={handleReadData} className="btn btn-primary">Read</button>
           
            <button onClick={handleWishlist} className="btn btn-primary">Wishlist</button>
            
        </div>


        </div>
        </div>
    );
};

export default CardDetails;
import { useLoaderData, useParams } from "react-router-dom";

import React from 'react';

const CardDetails = () => {
        const allBooks = useLoaderData();
        const {bookId} = useParams();
        const idInt = parseInt(bookId);
        const job = allBooks.find(u => u.bookId == idInt);
        console.log(job);
        const {author, bookName, image, review, totalPages, publisher, yearOfPublishing, rating} = job;


    // const allBooks = useLoaderData();
    // console.log(allBooks)
    // const {bookId} = useParams();
    // const user = allBooks.find((u)=>u.bookId == bookId)
    // console.log(user)
    // const {author, bookName, image} = job;


    return (
        <div className="flex gap-12 mt-[52px] w-[90%] mx-auto">
            
            <div className=" bg-slate-300 border rounded-[16px] w-full">
                <img src={image} alt="Shoes" className=" w-full p-[74px] "/>
            </div>

        <div className="c-details">
            <h2 className="text-[#131313] text-[40px]">{bookName}</h2>
            <span className="text-[#646262] text-[20px]">By : {author}</span>
            <hr className="mt-2" />
            <h3 className="mt-2 mb-2">Fiction</h3>
            <hr />
            <p className="text-[#131313] mt-2"><span className="text-[#131313] text-[16px]">Review: </span>{review}</p>
            <p></p>

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
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
        </div>


        </div>
        </div>
    );
};

export default CardDetails;
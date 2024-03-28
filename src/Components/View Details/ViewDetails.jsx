
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const biodata = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const details =biodata.find(item => item.id == idInt)

    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing, review  } = details;
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

        <div className="mt-2 flex gap-5"> 
            <p className="text-[#131313] text-[16px] p-[5px]">Tag</p>

            <div className="flex gap-4">
            {tags &&
            tags.map((tag, index) => (
              <h1
                key={index}
                className="flex justify-center items-center w-[123px] h-[33px] rounded-[30px] bg-[#23BE0A0D] text-[#23BE0A]">
                #{tag}
              </h1>
            ))}
            </div>

           
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
           <button  className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
        </div>

    </div>
    </div>
    );
};

export default ViewDetails;
import { MdPersonAddAlt1 } from "react-icons/md";
import "react-tabs/style/react-tabs.css";

const BookDetails = ({ item }) => {
    const {id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing  } = item;
  return (
   

      <div className="Listed-Books flex gap-7 border rounded-lg mt-9">
        <div className="c-img w-[230px] bg-[#F3F3F3] flex justify-center items-center">
          <img src={image} alt="" />
        </div>

        <div className="c-details">
          <h2>{bookName}</h2>
          <span>By : {author}</span>

          <div className="flex gap-4">
            <p>Tag</p>
            <p>#Young Adult</p>
            <p>#Identity</p>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-3">
              <MdPersonAddAlt1></MdPersonAddAlt1>
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z"
                  stroke="#131313"
                  stroke-opacity="0.6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Page {totalPages}</p>
            </div>
          </div>
          <hr />

          <div className="flex gap-4">
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
            <button className="btn btn-accent">View Details</button>
          </div>
        </div>
      </div>

  );
};

export default BookDetails;

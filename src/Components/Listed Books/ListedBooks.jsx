import React from 'react';

const ListedBooks = ({ bookList }) => {
   const{bookName, bookId} = bookList;
    return (
        <div>
            <span>Book Id : {bookId}</span>
          <h2>Name : {bookName}</h2>
          
        </div>
    );
};

export default ListedBooks;
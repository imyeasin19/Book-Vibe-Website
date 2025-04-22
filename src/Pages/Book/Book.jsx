import React from 'react';

const Book = ({book}) => {

    const {bookName, author, image,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
    return (
        <div>
            <h1>Single Book</h1>
        </div>
    );
};

export default Book;
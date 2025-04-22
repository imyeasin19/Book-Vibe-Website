import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            {
                data.map ((book)=> <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({ book }) => {

    const { bookId,bookName, author, image, rating, category, tags} = book;
    return (
       <Link to={`/BookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-6 rounded-2xl">
            <figure className='bg-gray-100 rounded-2xl'>
                <img className='h-[166px] p-6'
                    src={image} />
            </figure>

            <div className="card-body">
            <div className='flex gap-2'>
            <div className="badge text-[#23BE0A]">{tags[0]}</div>
            <div className='badge  text-[#23BE0A]'> {tags[1]}</div>
            </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By : {author}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <div className="">{category}</div>
                    <div className="badge">{rating}
                        <CiStar size={20}></CiStar>
                    </div>

                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;
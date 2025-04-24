import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addtoDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const SingleBook = data.find(book => book.bookId === bookId);
    console.log(SingleBook);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = SingleBook;

    const handleMarkAsRead = id =>{

        addtoDB(id);
    }
    return (
        <div className='flex gap-12 mt-14'>
            <div className='bg-gray-100 rounded-2xl p-24'>
                <img className='h-[500px]' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='font-bold text-4xl p-2'>{bookName}</h2>
                <p className='text-xl p-2'>By : {author}</p>
                <h4 className='my-6 py-4 border-t border-b border-gray-300 text-lg'>{category}</h4>
                <p>
                    <span className='font-bold text-base'>Review : </span>
                    <span className='font-medium text-[14px] text-gray-600'>{review}</span>
                </p>
                <div className='flex gap-4 items-center my-4 border-b border-gray-300 pb-6'>
                    <p className='font-bold text-base'>Tag </p>
                    <p className="badge text-[#23BE0A]"># {tags[0]}</p>
                    <p className='badge  text-[#23BE0A]'>#  {tags[1]}</p>
                </div>
                <div>
                    <div className="overflow-x-auto mb-3">
                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                    <th>Number of Pages:</th>
                                    <td>{totalPages}</td>
                                {/* row 2 */}
                                <tr>
                                    <th>Publisher:</th>
                                    <th>{publisher}</th>
                                </tr>
                                <tr>
                                    <th>Year of Publishing:</th>
                                    <th>{yearOfPublishing}</th>
                                </tr>
                                <tr>
                                    <th>Rating:</th>
                                    <th>{rating}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button onClick={()=> handleMarkAsRead(id)} className="btn btn-outline">Mark as Read</button>
                    <button className="btn btn-info text-white ml-6">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
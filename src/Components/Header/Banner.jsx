import React from 'react';


const Banner = () => {
    return (
        <div className='flex justify-around items-center mt-12 p-20 bg-gray-100 rounded-3xl'>
            <div className='space-y-12'>
                <h1 className='font-bold text-5xl'>Books to freshen up <br />
                 your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white'>View the list</button>
            </div>
            <div>
                <img className='' src="/src/assets/pngwing 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
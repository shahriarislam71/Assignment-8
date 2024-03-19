import React from 'react';

const BlogElement = (props) => {
    // console.log(props)
    const { image, Published_Date, title, Author_Image, Name, time } = props.blogData
    const {findTime,findTitle} = props
    return (
        <div>
            <div>
                <img className='w-full sm:h-52 md:h-80 rounded-lg' src={image} alt="" />
                <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center gap-4 mb-5'>
                        <img className='w-14 h-14 rounded-full' src={Author_Image} alt="" />
                        <div>
                            <h1 className='md:font-bold'>{Name}</h1>
                            <p>{Published_Date} (4 days ago)</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>{time} min read </p>
                        <span  className='cursor-pointer'><svg onClick={()=>findTime(time)}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg></span>
                    </div>
                </div>
                <h1 className='mt-3 mb-3 md:font-bold'>{title}</h1>
                <div className='md:flex md:gap-5'>
                    <h1>#Beginners</h1>
                    <p>#Programming</p>
                </div>
                <span onClick={()=>findTitle(title)} className='mb-5 underline underline-offset-4 text-blue-700 cursor-pointer'>Mark as read</span>
                <hr className='mb-5 mt-5' />
            </div>
        </div>
    );
};

export default BlogElement;
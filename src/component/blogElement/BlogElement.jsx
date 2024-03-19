import React from 'react';

const BlogElement = (props) => {
    const {image, Published_Date,description,Author_Image,Name,time} = props.blogData
    return (
        <div>
            <div>
                <img className='w-full sm:h-52 md:h-80 rounded-lg' src={image} alt="" />
                <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center gap-4 mb-5'>
                        <img className='w-14 h-14 rounded-full' src={Author_Image} alt="" />
                        <div>
                            <h1>{Name}</h1>
                            <p>{Published_Date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogElement;
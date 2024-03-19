import React from 'react';

const BlogNames = (props) => {
    const {des} = props
    // console.log(props.des)
    return (
        <div className='bg-white p-3 mx-2 mt-3 mb-3 text-center md:text-xl md:font-semibold rounded'>
            <h1>{des}</h1>
        </div>
    );
};

export default BlogNames;
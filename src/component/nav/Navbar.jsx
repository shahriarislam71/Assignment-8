import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='md:font-bold md:text-3xl'>Knowledge Cafe</h1>
                </div>
                <div>
                    <img className='w-14 h-14 rounded-full' src="https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg?w=740" alt="" />
                </div>
                
            </div>
            <hr  className='mt-4 border'/>
        </>
    );
};

export default Navbar;
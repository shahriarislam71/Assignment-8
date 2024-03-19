import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='md:font-bold md:text-2xl'>Knowledge Cafe</h1>
                </div>
                <div>
                    <img src="../../../public/images/profile.png" alt="" />
                </div>
                
            </div>
            <hr  className='mt-4 border'/>
        </>
    );
};

export default Navbar;
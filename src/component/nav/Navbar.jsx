import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                </div>
                <div>
                    <img src="../../../public/images/profile.png" alt="" />
                </div>
            </div>
            <hr className='mt-4 border'/>
        </>
    );
};

export default Navbar;
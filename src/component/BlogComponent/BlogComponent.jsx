import React from 'react';

const BlogComponent = () => {
    return (
        <div>
            <h1 className='md:font-bold md:text-2xl'>1. What is the difference between props vs state</h1>
            <p>Ans. Props is used to pass data and properties from component to components while is the state is the real time data that is available to use within that component only.</p>
            <h1 className='md:font-bold md:text-2xl'>2. How does useState work?</h1>
            <p>Ans. The useState works by handling and managind state in our application. It takes 2 parameters where The first parameter takes the state and the second parameter is used to set the state.</p>
            <h1 className='md:font-bold md:text-2xl'>3. Purpose of useEffect other than fetching data?</h1>
            <p>Ans. Besides fetching data, It also directly updated the DOM using dependency.</p>
            <h1 className='md:font-bold md:text-2xl'>4. How Does React work?</h1>
            <p>Ans. React relies on virtual dom. If there wil any change in our data state, react virtual dom is reloaded to reflect this new change.After that, react's virtual dom compares with the actual dom to identify what exactly has changed.</p>
        </div>

    );
};

export default BlogComponent;
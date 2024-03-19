import React, { useState } from 'react';
import BlogElement from '../blogElement/BlogElement';

const Blogs = () => {
    const [blogData,setBlogData] = useState([])
    console.log(blogData)
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogData(data))
    },[])
    return (
        <div>
           {
            blogData.map(data => <BlogElement key = {data.id} blogData = {data}></BlogElement>)
           }
        </div>
    );
};

export default Blogs;
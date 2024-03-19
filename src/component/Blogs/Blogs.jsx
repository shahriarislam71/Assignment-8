import React, { useEffect, useState } from 'react';
import BlogElement from '../blogElement/BlogElement';

const Blogs = ({findTime}) => {
    // console.log(props)
    const [blogData,setBlogData] = useState([])
    console.log(blogData)
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogData(data))
    },[])
    return (
        <div>
           {
            blogData.map(data => <BlogElement findTime = {findTime} key = {data.id} blogData = {data}></BlogElement>)
           }
        </div>
    );
};

export default Blogs;
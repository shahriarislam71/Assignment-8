import React, { useEffect, useState } from 'react';
import BlogNames from '../BlogNames/BlogNames';


const BlogName = ({title}) => {
    // console.log(props)
    const [Title,settitle] = useState([])
    // console.log(Title)
    useEffect(()=>{
        const getTitle = JSON.parse(localStorage.getItem('Title'))
        getTitle && settitle(getTitle)
    },[title])
    return (
        <div>
            <h1 className='p-2 bg-slate-100 rounded'>Bookmarked Blogs : 8</h1>
            {
                Title.map((des,index) => <BlogNames key = {index} des = {des}></BlogNames>)
            }
        </div>
    );
};

export default BlogName;
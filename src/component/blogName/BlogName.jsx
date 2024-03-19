import React, { useEffect, useState } from 'react';
import BlogNames from '../BlogNames/BlogNames';


const BlogName = ({title}) => {
    // console.log(props)
    const [Title,settitle] = useState([])
    const [titleLength, settitlelength] = useState(0)
    // console.log(titleLength)
    useEffect(()=>{
        const getTitle = JSON.parse(localStorage.getItem('Title'))
        getTitle && settitle(getTitle)
        getTitle && settitlelength(getTitle.length)
    },[title])
    return (
        <div className='p-3 bg-slate-100 rounded'>
            <h1 className='md:font-bold md:text-2xl text-center'>Bookmarked Blogs : {titleLength}</h1>
            {
                Title.map((des,index) => <BlogNames key = {index} des = {des}></BlogNames>)
            }
        </div>
    );
};

export default BlogName;
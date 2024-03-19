import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/nav/Navbar'
import BlogName from './component/blogName/BlogName'
import ReadingTime from './component/ReadingTime/ReadingTime'
import Blogs from './component/Blogs/Blogs'

function App() {
  // using useState for storing the time 
  const [time,setTime] = useState(0)
  // useState for storing the title
  const [title,setTitle] = useState([])
  const findTime = (time) =>{
    // console.log(time)
    const getTime = (localStorage.getItem('Time'))
    if(getTime){
      const totalTime = parseInt(getTime) + parseInt(time)
      localStorage.setItem('Time',totalTime)
      setTime(totalTime)
    }
    else{
      localStorage.setItem('Time',time)
      setTime(time)
    }
  }
  // function for finding the title 
  const findTitle = (title) =>{
      const getTitle = JSON.parse(localStorage.getItem('Title'))
      if (getTitle){
        localStorage.setItem(
          'Title',JSON.stringify([...getTitle,title])
        )
        setTitle([...getTitle,title])
      }
      else{
        localStorage.setItem(
          'Title',JSON.stringify([title])
        )
        setTitle(title)
      }
  }
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <div className='sm:col-span-1  md:col-span-2'>
          <Blogs findTitle = {findTitle} findTime = {findTime}></Blogs>
        </div>
        <div className='flex flex-col'>
          <div>
            <ReadingTime time = {time}></ReadingTime>
          </div>
          <div>
            <BlogName title = {title}></BlogName>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

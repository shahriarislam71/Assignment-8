import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/nav/Navbar'
import BlogName from './component/blogName/BlogName'
import ReadingTime from './component/ReadingTime/ReadingTime'
import Blogs from './component/Blogs/Blogs'

function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <div className='sm:col-span-1  md:col-span-2 border'>
          <Blogs></Blogs>
        </div>
        <div className='flex flex-col'>
          <div className='border'>
            <ReadingTime></ReadingTime>
          </div>
          <div className='border'>
            <BlogName></BlogName>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

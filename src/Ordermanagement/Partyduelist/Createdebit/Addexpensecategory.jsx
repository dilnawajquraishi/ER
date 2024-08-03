import React from 'react'
import { Link } from 'react-router-dom'
const Addexpensecategory = () => {
  return (
    <div>
         <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between pl-3 '> 
<h1 className='fw-bold'>Add New  Expense  Category</h1>
<div className='sub-div w-auto h-10'>

<Link to='/expenselist' className='w-56 h-12 ms-8 bg-purple-500  text-white ' style={{fontWeight:"bold",border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"5px"}}>Expense List</Link>
<Link to='/addexpensecategory' className='w-56 h-12 ms-8 bg-purple-500 text-white  ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"5px",fontWeight:"bold"}}> Add Expense Category </Link>


</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100  pl-2 '/>
      <div className='w-75 mt-4'> 
      <div className='w-auto h-13  bg-white pl-1  flex flex-row '>
  <input type='text' placeholder='Enter Category Name' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-80 ms-3 pl-20 pt-3 h-14 bg-white    flex flex-row 'style={{border:"1px solid grey"}}>
    <textarea placeholder='Description '>

    </textarea>
  </div>
      </div>
      <div className=' w-96 mb-60 mt-14 flex flex-row gap-3 ms-72  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>
    </div>
  )
}

export default Addexpensecategory

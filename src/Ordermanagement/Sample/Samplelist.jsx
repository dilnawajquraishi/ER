import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Samplelist = () => {
  return (
    <div>
      <div className='w-75 nav  h-16 bg-gray-100  flex flex-col justify-around' >
        <FaBars className='mt-2 ms-2' />
      <div className='w-72 flex flex-row gap-4 ms-96 pl-44 '>
      <IoMdNotificationsOutline style={{fontSize:"30px"}} />
<div className='w-12 h-12 bg-slate-400 pl-2 pt-2 m-52b-2' style={{borderRadius:"50%"}}>
<FaUserAlt className='pb-1' style={{fontSize:"33px"}} />

</div>
      </div>
      </div>
      <div className='w-75 mt-3 h-10 flex flex-row justify-between '>
        <h3 className='ms-4' style={{ fontSize: "25px" }}>Budget List</h3>
        <div className='sub-div w-auto h-10 ' style={{ border: "2px solid purple", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
        <button className='w-40 h-10 ms-8 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Budget List</button>

          <button className='w-40 h-10 ms-8 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Add New Budget</button>

        </div>

      </div>
      <hr className='bg-slate-700  w-75 mt-3' />
     
      <div className='form w-auto flex flex-row gap-4 mt-5 ms-4'>

        <select className="select h-11 w-80 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
          <option selected>All Result
          </option>
          <option>Per Page-30</option>
          <option >Per Page-50 </option>
          <option >Per Page-100  </option>
        </select>
        {/* </div> */}

        <input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
        <div className='icons'>
        <GrDocumentPdf />
        <BsFiletypeScss />

        </div>
      </div>
      <div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>
    </div>
  )
}

export default Samplelist

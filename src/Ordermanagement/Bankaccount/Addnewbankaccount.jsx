import React from 'react'
import { ImCross } from "react-icons/im";

const Addnewbankaccount = () => {
  return (
    <div className='w-75 addnewaccount  ms-9 pl-7 flex flex-col bg-white 'style={{height:"100",boxShadow:""}}>
<div className='w-75 ml-4 pt-3 mt-4 flex flex-row justify-between'>
      <h1 className='  ' style={{fontWeight:"bold",fontSize:"20px"}}>Add New Bank</h1>
      <ImCross  className='ImCross'/>
      </div>
<div className='w-100  pl-5 flex flex-row gap-8 h-96 mt-4'>
<div className="col-lg-6 mt-2 w-96  flex flex-col gap-9">
      
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  text' placeholder='Account Holder name' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Account Number' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Routing/Swift Number' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>  

</div>


{/* Right-side input */}

<div className="col-lg-6 mt-2 w-96 flex flex-col gap-10  ">
       
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Bank Name' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Branch Name' className='w-80 h-10'  style={{outline:"none"}}/>
  </div> 
   <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Opening Balance' className='w-80 h-10'  style={{outline:"none"}}/>
  </div> 
  
</div>
     </div>
     <div className=' w-96  mb-10 flex flex-row gap-4 ms-36 '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default Addnewbankaccount

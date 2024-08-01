import React from 'react'
import { ImCross } from "react-icons/im";
const Withdraw = () => {
  return (
    <div className='w-75 addnewaccount mt-4 ms-9 pl-7   flex flex-col bg-white 'style={{height:"100%",boxShadow:""}}>
      
      <div className='w-75 ml-4 pt-3 mt-4 flex flex-row justify-between'>
      <h1 className='  ' style={{fontWeight:"bold",fontSize:"20px"}}>Balance Transfer</h1>
      <ImCross  className='ImCross'/>
      </div>

<div className='w-100  pl-5 flex flex-row gap-8 h-96 mt-4'>
<div className="col-lg-6 mt-2 w-96  flex flex-col gap-9">
      
<div className='w-96 h- bg-black   flex flex-row'>
<select className="select h-11 w-96 pl-3 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Transfer Type
    </option>
    <option>Bank to Bank Transfer</option>
    <option >Bank to Cash Transfer</option>
    <option >  Cash to Bank Transfer </option>
    <option >Adjust  Bank  Balance</option>

  


</select>
</div>
<div className='w-96 h- bg-black   flex flex-row'>
<select className="select h-11 w-96 pl-3 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Transfer Type
    </option>
    <option>-Select Bank-</option>
    <option >j(565757)</option>


  


</select>
</div>
   <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Amount' className='w-80 h-10'  style={{outline:"none"}}/>
  </div> 
    <textarea placeholder='Note'  className='p-5'style={{border:"1px solid grey",outline:"none"}} >

    </textarea>
</div>


{/* Right-side input */}

<div className="col-lg-6 mt-2 w-96 flex flex-col gap-10  ">
      
<div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-36 pl-2 bg-white ms-5 mt-1 pt-2' style={{fontSize:"13px"}}> Date</label>
  <input type='date' placeholder='Enter Booking date' className='w-60 text-center h-10 ms-3' style={{outline:"none",}} />
  </div>
  <div className='w-96 h- bg-black   flex flex-row'>
<select className="select h-11 w-96 pl-3 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Transfer Type
    </option>
    <option>-Select Bank-</option>
    <option >j(565757)</option>
</select>
</div>
   <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Enter Shipment Mode' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>  <div className='w-auto h-15 mb-2 bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Enter Shipment Mode' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
</div>
     </div>
     <div className=' w-96 mt-4 mb-5 flex flex-row gap-4 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Reset</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default Withdraw

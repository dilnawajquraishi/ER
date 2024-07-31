import React from 'react'

const AddNeworder = () => {
  return (
    <div className='w-75  ' style={{height:"100%"}}>
         <div className='w-auto mt-3 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'>Add New Order</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Shipment List</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Shipment</button>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"100vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-5'> 
<div className='w-auto h- bg-black   flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select h-11 w-80 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select a Party
    </option>
    <option>000-B-2 (01752220026)</option>
    <option >NR (4234242342)</option>
    <option>RGB Textile()</option>
    <option>Line-2</option>
    <option>Line-1</option>
    <option>LC Waikiki()</option>


</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
</div>
{/* order No */}
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Order No' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Order Description' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='GSM' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Payment Mode' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-32 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{fontSize:"13px"}}>Contact Date</label>
  <input type='date' placeholder='Enter Payment Mode' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Port of Loading' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  text' placeholder='Remark' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
</div>
{/* second-col */}
<div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'> 
<div className='w-auto    flex flex-row'>
    {/* <label>Party name</label> */}
<select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
    <option selected>Select a Merchandiser
    </option>
    <option>Marlon Marlon Morales</option>
    <option >Merchandiser</option>
   
</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
</div>
{/* order No */}
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder=' Enter Order Title' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Fabrication Name' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Yarn Count' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-auto    flex flex-row'>
<select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
    <option selected>Select a Account
    </option>
    <option>h (565757)</option>
   
</select>
<div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
</div>
<div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Pantone' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15 pl-12  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-32  text-gray-400 pt-2' style={{fontSize:"13px"}}>Expiry Date</label>
  <input type='date' placeholder='Enter Payment Mode' className='w-72 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
</div>
{/* Third col */}
<div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'> 
<div className=' bg-red ms-2  flex flex-row' style={{width:"1150px"}}>
<label htmlFor="upload" className="upload-img mt-2">
    <p className=' ms-2'>    Upload Item Image
    </p>
  <input type="file" name="image" id="upload" accept="image/*" className="d-none file-input-change" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="image" className="img-preview h-48 w-80 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</label>



</div>
{/* order No */}
<div className='w-auto h-15  bg-white   flex flex-row ' style={{border:"1px solid grey"}}>
  <input type='  number' placeholder='Enter Shipment Mode' className='w-80 h-10'  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Enter Year' className='w-80 h-10' style={{outline:"none"}} />
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Consignee & Notify' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
  <input type='text' placeholder='Negotiation Period' className='w-80 h-10 '  style={{outline:"none"}}/>
  </div>
  <div className='w-auto h-15  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
    <label className='w-32 bg-white ms-5 mt-1  text-gray-400 pt-2' style={{fontSize:"14px"}}>Contact Date</label>
  <input type='date' placeholder='Payment Terms' className='w-60 text-center h-10 ms-3' style={{outline:"none"}} />
  </div>
 
</div>


      </div> 
      {/* table */}
   <table className=" w-auto ms-6 mt-5 table table-two daily-production-table-print " id="erp-table">
  <thead>
    <tr>
      <th><strong>STYLE</strong></th>
      <th><strong>COLOR</strong></th>
      <th><strong>ITEM</strong></th>
      <th><strong>SHIPMENT DATE</strong></th>
      <th><strong>QTY</strong></th>
      <th><strong>UNIT PRICE</strong></th>
      <th><strong>TTL PRICE</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr className="position-relative">
      <td><div className="add-btn-one"><i className="fal fa-plus" aria-hidden="true" /></div></td>
      <td><div className="tr-remove-btn remove-one" style={{display: 'none'}}><i className="fas fa-trash" /></div></td>
    </tr>
    <tr className="duplicate-one">
      <td><input type="text" name="style[]" className="form-control style clear-input" required placeholder="Style" /></td>
      <td><input type="text" name="color[]" className="form-control color clear-input" placeholder="Color" /></td>
      <td><input type="text" name="item[]" className="form-control item clear-input" placeholder="Item description" /></td>
      <td><input type="date" name="shipment_date[]" defaultValue="2024-07-30" required className="form-control shipment_date clear-input" /></td>
      <td><input type="number" name="qty[]" className="form-control count-length qty 0" data-length={0} required placeholder="Qty" /></td>
      <td><input type="number" name="unit_price[]" className="form-control count-length unit_price 0" data-length={0} required placeholder="Unit price" /></td>
      <td><input type="number" name="total_price[]" className="form-control total_price 0" placeholder="Total price" readOnly data-length={0} defaultValue={0} /></td>
    </tr>
    <tr className="total">
      <td colSpan={4}><h6 className="text-end">Total</h6></td>
      <td><h6 className="total_qty">0</h6></td>
      <td><h6 className="total_unit_price">0</h6></td>
      <td><h6 className="final_total_price">0</h6></td>
    </tr>
  </tbody>
</table>
<div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
    <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
    <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default AddNeworder

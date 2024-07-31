import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Booklist = () => {
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
      <section className="customerdata mx-auto w-full max-w-7xl px-4 py-4 ms-1">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
        
       
        </div>
        <div className="mt-6 w-auto flex flex-col tabledaatboking">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>SL.</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                    Order No.
                      </th>
                  
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                  Style
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                  total Quantity
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                   Avg./Unit Price
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
Total Value
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
            Status
                    </th>
                    
                
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
              status
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
            Action
                    </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div className="text-sm text-gray-700">john@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-900 ">Front-end Developer</div>
                        <div className="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        Developer
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <Link to="#" className="text-gray-700">
                          Edit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Jane Doe
                            </div>
                            <div className="text-sm text-gray-700">jane@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-900 ">Back-end Developer</div>
                        <div className="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        CTO
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <Link to="#" className="text-gray-700">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       
      </section>

    </div>
  )
}

export default Booklist

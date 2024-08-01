import React from 'react'

const Bankaccount = () => {
  return (
    <div className='w-77   '>

      {/* for dollers-container */}

              <div className=' w-100 ms-4 mt-3  flex flex-row gap-7' style={{fontFamily:"sans-serif"}}>

      <div className='w-48   flex h-16 flex-row gap-3 p-2' style={{borderRadius:"7px",fontSize:"13px",fontWeight:"bold",border:"1px solid whitesmoke"}}>
<img src="https://erpsoftware.acnoo.com/assets/images/icons/value.svg"  className='h-13' alt="https://erpsoftware.acnoo.com/assets/images/icons/value.svg" />
$20,000.00<br/>
Balance
      </div>
      <div className='w-48 h-16 pl-2 pb-2 flex flex-row gap-3  'style={{borderRadius:"7px",fontSize:"13px",fontWeight:"bold",border:"1px solid whitesmoke"}}>
    <img src="https://erpsoftware.acnoo.com/assets/images/icons/deposit.png" alt="https://erpsoftware.acnoo.com/assets/images/icons/deposit.png" className='h-14'  />
    $10,000.00

    Deposit

        </div> 
        <div className='w-48 h-16  pt-2 p-2 flex flex-row gap-3 'style={{borderRadius:"7px",fontSize:"13px",fontWeight:"bold",border:"1px solid whitesmoke"}}>
        <img src="https://erpsoftware.acnoo.com/assets/images/icons/money-withdrawal.png" alt="https://erpsoftware.acnoo.com/assets/images/icons/money-withdrawal.png"  className='h-14' />
        $0.00<br/>
Withdraw
        </div>
        </div>
        <div className='w-75 mt-5 h-10 flex flex-row justify-between ms-4'> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Bank accounts</h1>
<div className='sub-div  w-96 h-10 '>
<button className='w-32  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"10px"}}>+Add New bank </button>
<button className='w-40 h-10 ms-8  text-white bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none",borderRadius:"10px"}}>Deposite/Withdraw </button>

</div>
      </div>
      <hr className='bg-slate-700  ms-3 w-75 mt-3'/>
      <table class="table mt-5 w-75 ms-3 mt-6" style={{border:"2px solid grey"}}>
  <thead>
    <tr className='' >
      <th scope="col">SL.</th>
      <th scope="col">Account Holder name</th>
      <th scope="col">Bank Name</th>
      <th scope="col">Account Number</th>
      <th scope="col">Routing/Swift Number</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>h</td>
      <td>j</td>
      <td>44</td>
      <td>er44</td>
      <td>4$4</td>
      <td>:</td>


    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Bankaccount

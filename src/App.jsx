import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
// import Orderlist from './Ordermanagement/Orderlist';
import Shipmentslist from './Ordermanagement/Shipment/Shipmentslist';
// import Addneworder from './Ordermanagement/Addneworder';
import Ordersummary from './Ordermanagement/Order_List/Ordersummary';
import AddNeworder from './Ordermanagement/Order_List/AddNeworder';
import Addparty from './Ordermanagement/Order_List/Addparty';
import Customerid from './Ordermanagement/Order_List/Customerid';
import Booklist from './Ordermanagement/Bookinglist/Booklist';
import Addnewbooking from './Ordermanagement/Bookinglist/Addnewbooking';
import Budget_List from './Ordermanagement/Budgetlist/Budget_List'
import Addnewbudget from './Ordermanagement/Budgetlist/Addnewbudget';
import Samplelist from './Ordermanagement/Sample/Samplelist';
import Addnewsample from './Ordermanagement/Sample/Addnewsample';
import AddnewShipment from './Ordermanagement/Shipment/AddnewShipment';
import Costinglist from './Ordermanagement/Costing/Costinglist';
import Bankaccount from './Ordermanagement/Order_List/Bankaccount';
import Addnewbankaccount from './Ordermanagement/Bankaccount/Addnewbankaccount'
import Withdraw from './Ordermanagement/Bankaccount/Withdraw';
import Buyer from './Ordermanagement/PartyList/Buyer';
import Addbuyer from './Ordermanagement/PartyList/Addbuyer';
import Supplierlist from './Ordermanagement/PartyList/Supplierlist';
import Allbuyerduelist from './Ordermanagement/Partyduelist/Allbuyerduelist';
import Duesupplierlist from './Ordermanagement/Partyduelist/Duesupplierlist';
import Creditvoucher from './Ordermanagement/Partyduelist/Creditvoucher';
import Createcredit from './Ordermanagement/Partyduelist/Createcredit';
import Createaddbuyer from './Ordermanagement/Partyduelist/Createaddbuyer';
import Incomelist from './Ordermanagement/Partyduelist/Incomelist';
import Addnewincomecategory from './Ordermanagement/Partyduelist/Adddnewincomecategory';
function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/forgot' element={<Forgotpassword/>}  />
        <Route path='/oderlist' element={<Ordersummary/>}  />
        <Route path='/shipmentslist' element={<Shipmentslist/>}  />
        <Route path='/addneworder' element={<AddNeworder/>}  />
        <Route path='/addparty' element={<Addparty/>}  />
        <Route path='/customerid' element={<Customerid/>}  />
        <Route path='/booklist' element={<Booklist/>}  />
        <Route path='/addnewbooking' element={<Addnewbooking/>}  />
        <Route path='/budgetlist' element={<Budget_List/>}  />
        <Route path='/addnewbudget' element={<Addnewbudget/>}  />
        <Route path='/samplelist' element={<Samplelist/>}  />
        <Route path='/addnewsample' element={<Addnewsample/>}  />
        <Route path='/shipment' element={<Shipmentslist/>}  />
        <Route path='/addnewshipment' element={<AddnewShipment/>}  />
        <Route path='/costinglist' element={<Costinglist/>}  />
        <Route path='/bankaccount' element={<Bankaccount/>}  />     
         <Route path='/addnewbankaccount' element={<Addnewbankaccount/>}  />
         <Route path='/withrdraw' element={<Withdraw/>}  />
         <Route path='/buyer' element={<Buyer/>}  />
         <Route path='/addbuyer' element={<Addbuyer/>}  />
         <Route path='/supplierlist' element={<Supplierlist/>} />
         <Route path='/allbuyerduelist' element={<Allbuyerduelist/>} />
         <Route path='/duesupplierlist' element={<Duesupplierlist/>} />
         <Route path='/creditvoucher' element={<Creditvoucher/>} />
         <Route path='/cretecredit' element={<Createcredit/>} />
         <Route path='/createaddbuyer' element={<Createaddbuyer/>} />
         <Route path='/incomelist' element={<Incomelist/>} />
         <Route path='/incomecategory' element={<Addnewincomecategory/>} />




         Incomelist




         





















      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

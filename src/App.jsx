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




















      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

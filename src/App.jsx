import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
// import Orderlist from './Ordermanagement/Orderlist';
import Shipmentslist from './Ordermanagement/Shipmentslist';
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














      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

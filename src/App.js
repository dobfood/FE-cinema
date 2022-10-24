import Detail from './component/detail/detail';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./component/master/master";
import Login from "./component/login/login";
import Registration from "./component/register/register";
import Sidebar from "./component/sidebar/index";
import Seat from "./component/seat/seat";
import Invoice from "./component/invoice/invoice";
import Header from "./component/header/header";

function App() {
  return (
    <>
      
        <Header />
        <Routes>
            <Route path='' element={<Sidebar />} />     
            <Route path='/chi-tiet/:productID' element={<Detail />} />
            <Route path="/" element={<Master />}>
              <Route path="/dang-ky" element={<Registration />} />
              <Route path="" element={<Sidebar />} />
              <Route path="/dang-nhap" element={<Login />} />
              <Route path="/mua-ve/chon-ghe" element={<Seat />} />
              <Route path="/mua-ve/thanh-toan" element={<Invoice />} />
            </Route>
        </Routes>
     
    </>
  )
}


export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Master from "./component/master/master";
import Login from "./component/login/login";
import Registration from "./component/register/register";
import Sidebar from "./component/sidebar/index";
import Seat from "./component/seat/seat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/register" element={<Registration />} />
          <Route path="" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mua-ve/chon-ghe" element={<Seat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

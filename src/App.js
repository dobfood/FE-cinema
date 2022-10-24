import './App.css';
import { Route, Routes } from 'react-router-dom';
import Master from './component/master/master';
import Login from './component/login/login';
import Registration from './component/register/register';
import Sidebar from './component/sidebar/index';
import Detail from './component/detail/detail';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Master />}>
          <Route path='/register' element={<Registration />} />
          <Route path='' element={<Sidebar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chi-tiet/:productID' element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Master from './component/master/master';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Login from './component/login/login';
import Registration from './component/register/register';
import Sidebar from './component/sidebar/sidebar';
import Product from './component/product/product';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Product />} /> */}
        <Route path='/' element={<Master />}>
          <Route path='/register' element={<Registration />} />
        <Route path='' element={<Sidebar />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

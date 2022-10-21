import './App.css';
import { Route, Routes } from 'react-router-dom';
import Master from './component/master/master';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Login from './component/login/login';
import Registration from './component/register/register';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    {/* <Route path='/' element={<Header/>}/> */}

      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
   
    </>
  );
}

export default App;

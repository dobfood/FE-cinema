import './App.css';
import { Route, Routes } from 'react-router-dom';
import Master from './component/master/master';
import Footer from './component/footer/footer';
import Header from './component/header/header';

function App() {
  return (
    <>
    <Header/>
    {/* <Routes>
    <Route path='/' element={<Master/>}/>

      <Route path='/register' element={<Master/>}/>
    </Routes> */}
    {/* <Footer/> */}
   
    </>
  );
}

export default App;

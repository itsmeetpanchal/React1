import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Electronics from './subcomponunts/Electronics';
import Fashion from './subcomponunts/Fashion';
import Furnitures from './subcomponunts/Furnitures';
import Mobails from './subcomponunts/Mobails';
import Head from './Head';
import Footer from './Footer';

function App() {
  return (
    <div>

    <ToastContainer
      position='top-right'
      autoClose='2500'
      theme='colored'
    />
    

    <BrowserRouter>
    <Head/>
    
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/' element={<Header/>}></Route>
    <Route path='/Elecronics' element={<Electronics/>}></Route>
    <Route path='/Fashion' element={<Fashion/>}></Route>
    <Route path='/Furnitures' element={<Furnitures/>}></Route>
    <Route path='/Mobails' element={<Mobails/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   

    </div>
  );
}

export default App;

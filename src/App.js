import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking></Booking>
          </RequireAuth>

        

        }></Route>
        
        {/* <Route path='/signup' element={}></Route> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

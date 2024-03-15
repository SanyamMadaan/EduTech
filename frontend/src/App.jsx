import {Login} from './component/login.jsx';
import { Signup } from './component/Signup.jsx';
import { Admin_login } from './component/Admin_login.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './component/Dashboard.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/admin" element={<Admin_login></Admin_login>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

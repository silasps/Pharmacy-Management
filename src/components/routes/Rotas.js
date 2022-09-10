import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom'
import Home from '../../pages/Home';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/NotFound';
import RegisterPharm from '../../pages/pharmMngmt/RegisterPharm';


export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route element={<RotaPrivada />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Route> */}
  
          <Route path="/login" element={<Login />} />
          <Route path="/entrar" element={<Navigate replace to="/login" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />

          <Route path='/home' element={<Home />}/>
          <Route path='/principal' element={<Navigate replace to='/home'/>} />

          <Route path='/register-pharm' element={<RegisterPharm />}/>
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LoginProvider } from './components/contexts/useLogin';
import Rotas from './components/routes/Routes';
import MainHeader from './pages/Header/Header';
import Footer from './pages/Footer/Footer'

export default function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <MainHeader />
        <Rotas />
        {/* <Footer /> */}
      </BrowserRouter>
    </LoginProvider>
  );
}
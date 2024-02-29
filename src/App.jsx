import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProductIdPage from './pages/ProductIdPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import PurchasesPage from './pages/PurchasesPage';
import HeaderNav from './components/shared/HeaderNav';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  

  return (
    <>
      <div>
        <HeaderNav/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/product/:id' element={<ProductIdPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/purchases' element={<PurchasesPage/>} />
          </Route>

        </Routes>
      </div>
    </>
  )
}

export default App;

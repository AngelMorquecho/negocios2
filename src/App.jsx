import {BrowserRouter,Routes,Route}from'react-router-dom'
import NewSellerCount from './pages/NewSellerCount';
import NewClientCount from './pages/NewClientCount';
import LoginS from './pages/LoginS';
import LoginC from './pages/LoginC';
import PasswordSeller from './pages/PasswordSeller';
import PasswordClient from './pages/PasswordClient';
import Layout from './pages/Layout';
import LayoutClient from './pages/LayoutC';
import ShoppingCart from './pages/ShoppingCart';
import Order from './pages/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateProduct from './pages/UpdateProduct';
import Grafica from './pages/Grafica';
import Details from './pages/Datails';
import Busqueda from './components/Busqueda';
<<<<<<< HEAD
import OrdersClient from './pages/OrdersClient';
import Search from './pages/Search';
=======
import OrdenC from './components/OrdenC';

>>>>>>> 24ee31eef7a8e2edebe121b7f8146265cf5d9ab9


function App() {
  return (
<BrowserRouter>

  <Routes>
  
    <Route path='/createCountS'element={<NewSellerCount/>}/>
    <Route path='/createCountC'element={<NewClientCount/>}/>
    <Route path='/loginS'element={<LoginS/>}/>
    <Route path='/loginC'element={<LoginC/>}/>
    <Route path='/udpatePasswordS'element={<PasswordSeller/>}/>
    <Route path='/udpatePasswordC'element={<PasswordClient/>}/>
    <Route path='/sportClubS'element={<Layout/>}/>
  <Route path='/sportClubC'element={<LayoutClient/>}/>
    <Route path='/shoppingCart'element={<ShoppingCart/>}/>
    <Route path='/orderProduct'element={<Order/>}/>
    <Route path='/product/:id'element={<UpdateProduct/>}/>
    <Route path='/grafica'element={<Grafica/>}/>
    <Route path='/detalles/:id'element={<Details/>}/>
    <Route path='/busqueda'element={<Busqueda/>}/>
<<<<<<< HEAD
    <Route path='/ordersClient'element={<OrdersClient/>}/>
    <Route path='/search'element={<Search/>}/>
=======
    <Route path='/ordenC'element={<OrdenC/>}/>
   
          
>>>>>>> 24ee31eef7a8e2edebe121b7f8146265cf5d9ab9
  </Routes>


</BrowserRouter>
   
  );
}

export default App;

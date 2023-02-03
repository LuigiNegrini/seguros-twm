import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Clients from './views/Clients';
import Tecnicians from './views/Tecnicians';
import ServiceOrder from './views/ServiceOrder';
import Products from "./views/Products";
import ServicesType from "./views/TypesOfServices";
import ShowClients from './views/showClients';
import ShowTecnicians from './views/showTecnicians';
import ShowServiceOrder from './views/showServiceOrder';
import ShowProducts from "./views/showProducts";
import ShowServicesType from "./views/showTypesOfServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/tecnicians" element={<Tecnicians />} />
          <Route exact path="/services-order" element={<ServiceOrder />} />
          <Route exact path="/services-type" element={<ServicesType />} />
          <Route exact path="/showproducts" element={<ShowProducts />} />
          <Route exact path="/showclients" element={<ShowClients />} />
          <Route exact path="/showtecnicians" element={<ShowTecnicians />} />
          <Route exact path="/showservices-order" element={<ShowServiceOrder />} />
          <Route exact path="/showservices-type" element={<ShowServicesType />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import Banner from "./components/banner"
import Catalog from './components/pages/Catalog'
import Product from './components/pages/Product'
import { HashRouter, Routes, Route,  } from 'react-router-dom';
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Banner/> } />
        <Route path='/catalog' element={<Catalog/> } />
        <Route path='/product' element={<Product/> } />
        
      </Routes>
    </HashRouter>
   
    
  )
}

export default App

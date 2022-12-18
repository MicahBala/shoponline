import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './pages/Cart'
import Items from './pages/Items'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Items />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

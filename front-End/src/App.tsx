import { BrowserRouter as Router , Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/home'


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />

        {/* Error page */}
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

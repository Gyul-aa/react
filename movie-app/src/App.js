import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './routes/Home'
import About from './routes/About'

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
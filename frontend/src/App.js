import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigationbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <div className='pages'>
        <Routes>
          <Route
          path='/'
          element={<Home/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

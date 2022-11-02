import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigationbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import TypesofExercises from './pages/TypesofExercises';
import Home from './pages/Home'
import Routine from './pages/Routine'
import History from './pages/History'
import Start from './pages/Start'


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
          <Route
          path='/Start'
          element={<Start/>}
          />
          <Route
          path='/History'
          element={<History/>}
          />
          <Route
          path='/Routines'
          element={<Routine/>}
          />
          <Route
          path='/TypesofExercises'
          element={<TypesofExercises/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

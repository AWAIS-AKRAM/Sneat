import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from './Pages/Help';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Help' element={<Help/>} />
      </Routes>
      </BrowserRouter>
       

   
    </div>
  );
}

export default App;

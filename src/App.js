import logo from './logo.svg';
import './App.css';
import Adopt from './petadoptionapp/adopt';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './petadoptionapp/home';
import Petform from './petadoptionapp/petform';
import PetImage from './petadoptionapp/petimage';
import PetAdded from './petadoptionapp/addedpet';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/addapet' element={<Petform/>}></Route>
            <Route path='/nextbutton' element={<PetImage/>}></Route>
            <Route path='/cancelbutton' element={<Petform/>}></Route>
            <Route path='/save' element={<PetAdded/>}></Route>
            <Route path='/home' element={<Homepage/>}></Route>
            <Route path='/back'  element={<Petform/>}></Route>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

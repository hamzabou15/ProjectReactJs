import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './pages/Greeting/Greeting';
import Counter from './pages/counter/Counter';
import NameList from './pages/NameList/NameList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/greeting"  element={<Greeting  name={'Bryan Elpitiya'} />} />
      <Route path="/counter"  element={<Counter  count={0} />} />
      <Route path="/list"  element={<NameList  />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

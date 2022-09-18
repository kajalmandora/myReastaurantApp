import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login';

import Restaurant from './components/restaurant';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/restaurant' element={<Restaurant/>}/>
      </Routes>
    </Router>
  );
}
export default App;

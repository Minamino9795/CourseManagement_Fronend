import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Master from './layouts/Master';
import Header from './includes/Header';


function App() {
  return (
    <div className="App">
   <Routes>  
  <Route path="/" element={< Header />} />
  <Route path="/master" element={< Master />} />
   </Routes>
   </div>
  );
}

export default App;

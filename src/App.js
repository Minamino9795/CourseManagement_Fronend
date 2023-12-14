import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Master from './layouts/Master';


function App() {
  return (
   <Routes>  
   <Route path="/layouts" element={<Master />} />
   </Routes>
 
  );
}

export default App;

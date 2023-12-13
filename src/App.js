import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Master from './layouts/Master';


function App() {
  return (
   <Routes>  
   <Route path="/" element={<Master/>}></Route>
   </Routes>
 
  );
}

export default App;


import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./Pages/Home"
import Trending from "./Pages/Trending"

function App() {
  return (

      //use 3 endpoints from Giphy API
      //random, trending, search?
        
      <Router>
          <nav>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="" />
            <Route path="*" />
          </Routes>
        </Router>     
  );
}

export default App;

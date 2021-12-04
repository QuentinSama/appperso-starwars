import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HeaderApp from './components/HeaderApp';





function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Navbar/>
      <HeaderApp/>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/personnages" element={<Search/>}/>
        </Routes>
      </Container>
    </Router>
    </div>
    </>
  );
}

export default App;

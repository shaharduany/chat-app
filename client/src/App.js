import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import JoinPage from './components/signing-page';
import MainPage from './components/MainPage';
import {Container} from 'react-bootstrap';

function App() {
  const user = useSelector(state => state.user);
  console.log(user);
  const rooms = useSelector(state => state.rooms);
  console.log(rooms);
  
  return (
    <div className='app-wrapper'>
      <Router>
        <Container>
          <Nav />
          <Routes>
            <Route exact path="/" element={<h1>home page</h1>}></Route>
            <Route exact path="/join" element={<JoinPage />}></Route> 
            <Route exact path="/main" element={<MainPage />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

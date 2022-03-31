import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Header from './components/Nav';
import JoinPage from './components/signing-page';
import MainPage from './components/MainPage';
import {Container} from 'react-bootstrap';
import styles from './styles';
import paths from './routes';

const PATHS = paths();

function App() {
  const style = styles();

  const user = useSelector(state => state.user);
  console.log(user);
  const rooms = useSelector(state => state.rooms);
  console.log(rooms);
  
  return (
    <div className='app-wrapper' style={style.app}>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route exact path={PATHS.homepage} element={<h1>home page</h1>}></Route>
            <Route exact path={PATHS.join} element={<JoinPage />}></Route> 
            <Route exact path={PATHS.main} element={<MainPage />}></Route>
          </Routes>
        </Container>
      </Router>
      <div style={style.footer}>
        <footer>
          Credit: Shahar Duany
        </footer>
      </div>
    </div>
  );
}

export default App;

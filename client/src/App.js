import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import JoinPage from "./components/signing-page";
import MainPage from "./components/MainPage";
import styles from "./styles";
import paths from "./routes";

const PATHS = paths();

function App() {
  const style = styles();

  const user = useSelector((state) => state.user);
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    
  }, [user, rooms]);

  return (
    <div className="app-wrapper" style={style.app}>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path={PATHS.homepage}
            element={<MainPage />}
          ></Route>
          <Route exact path={PATHS.join} element={<JoinPage />}></Route>
          <Route exact path={PATHS.account} element={<h1>BUILD IT</h1>}></Route>
        </Routes>
      </Router>
      <footer  style={style.footer}>Credits: Shahar Duany</footer>
    </div>
  );
}

export default App;

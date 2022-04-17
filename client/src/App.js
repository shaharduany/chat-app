import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import JoinPage from "./components/signing-page";
import MainPage from "./components/MainPage";
import styles from "./styles";
import paths from "./routes";
import Logout from "./components/Logout";
import { requestRooms } from "./scripts/rooms-scripts";
import { updateToken } from "./store/token";
import { updateRooms } from "./store/rooms/rooms";

const PATHS = paths();

function App() {
  const dispatch = useDispatch();

  const style = styles();

  const user = useSelector((state) => state.user);
 
  useEffect(async () => {
    let data = await requestRooms(user);
    dispatch(updateRooms(data.rooms));
    dispatch(updateToken(data.accessToken));
    console.log(data);
  }, [user]);

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
          <Route exact path={PATHS.logout} element={<Logout />}></Route>
        </Routes>
      </Router>
      <footer  style={style.footer}>Credits: Shahar Duany</footer>
    </div>
  );
}

export default App;

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

// import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app__wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

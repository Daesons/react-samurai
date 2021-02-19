import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Header} from "./Components/Header/Header";
import {Music} from "./Components/Music/Music";
import {Friends} from "./Components/Friends/Friends";
import {News} from "./Components/News/News";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";



function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer  />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Friends' render={() => <Friends/>}/>
                    <Route path='/Users' render={() => <UsersContainer />}/>
                    <Route path='/Login' render={()=><Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;

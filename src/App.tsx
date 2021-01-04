import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Profile/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./Components/Profile/Settings/Settings";
import Music from "./Components/Profile/Music/Music";
import News from "./Components/Profile/News/News";
import Friends from "./Components/Profile/Friends/Friends";

import {storeType} from "./Components/redux/redux-store";
import DialogsContainer from "./Components/Profile/Dialogs/DialogsContainer";


// type AppPropsType = {
//     store: storeType
// }


function App() {

    // // вызов функции что даёт на сам стейт с пэйджами и присвоение ему названия

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/Friends' render={() => <Friends/>}/>

                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;

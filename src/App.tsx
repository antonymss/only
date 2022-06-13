import React from 'react';
import './App.css';
import only from "./img/ONLY.png"
import {Login} from "./pages/Login";
// @ts-ignore
import {Route, Switch} from "react-router-dom";
import {Profile} from "./pages/Profile";
// import styled from "styled-components";

// const ImgStyled = styled.div`
//   max-height: 78px;
//   max-width: 180px;
//   margin-top: 40px;
//   margin-left: 44%
// `

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
}

function App() {
    return (
        <div className="App">

            {/*<ImgStyled>*/}
            <img className="img" src={only} alt="only"/>
            {/*</ImgStyled>*/}
            <Login/>
            {/*<Profile/>*/}
            {/*<Switch>*/}
            {/*    <Route path={PATH.LOGIN}>*/}
            {/*        <Login/>*/}
            {/*    </Route>*/}
            {/*    <Route path={PATH.PROFILE}>*/}
            {/*        <Profile/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import only from "./img/ONLY.png"
import {Login} from "./Login";
// import styled from "styled-components";

// const ImgStyled = styled.div`
//   max-height: 78px;
//   max-width: 180px;
//   margin-top: 40px;
//   margin-left: 44%
// `

function App() {
    return (
        <div className="App">
            {/*<ImgStyled>*/}
                <img className="img" src={only} alt="only"/>
            {/*</ImgStyled>*/}



            <Login/>
        </div>
    );
}

export default App;

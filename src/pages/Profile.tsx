import React from 'react';
import {NavLink} from "react-router-dom";
// import styled from "styled-components";

// const Button = styled.button`
//width: 200px;
//     height: 60px;
//     background: #F5F5F5;
//     border-radius: 8px;
//     border: none;
//     margin-top: 50px;
//     font-family: 'Helvetica Neue';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 22px;
// `

export const Profile = () => {
    return (
        <div className="profile">
            <div> Здравствуйте, <span style={{fontWeight: "bold"}}> steve.jobs@example.com</span></div>
            <NavLink to="/login" ><button className="grayButton">Выйти</button></NavLink>
        </div>
    );
};

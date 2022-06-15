import React from "react";

import { NavLink } from "react-router-dom";

import { PATH } from "enums";
import { ReturnComponentType } from "types";
import { Button, ProfileStyled } from "./style";

const { REACT_APP_DEFAULT_EMAIL } = process.env;

export const Profile = (): ReturnComponentType => (
  <ProfileStyled>
    <div>
      Здравствуйте,
      <span style={{ fontWeight: "bold" }}> {REACT_APP_DEFAULT_EMAIL}</span>
    </div>
    <NavLink to={PATH.LOGIN}>
      <Button type="button">Выйти</Button>
    </NavLink>
  </ProfileStyled>
);

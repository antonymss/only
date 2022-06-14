import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from 'enums';
import { ReturnComponentType } from 'types';

const { REACT_APP_DEFAULT_EMAIL } = process.env;

export const Profile = (): ReturnComponentType => (
  <div className="profile">
    <div>
      Здравствуйте,{' '}
      <span style={{ fontWeight: 'bold' }}> ${REACT_APP_DEFAULT_EMAIL}</span>
    </div>

    <NavLink to={PATH.LOGIN}>
      <button type="button" className="grayButton">
        Выйти
      </button>
    </NavLink>
  </div>
);

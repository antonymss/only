/* eslint-disable */
import * as React from 'react';

import '../../styles/App.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import error from '../../assets/img/error.png'

import { FormValuesType } from './types';
import { ReturnComponentType } from 'types';
import { PATH } from 'enums';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import clsx from "clsx";

const { REACT_APP_DEFAULT_EMAIL , REACT_APP_DEFAULT_PASSWORD   } = process.env;

export const Login = (): ReturnComponentType => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesType>();

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValuesType> = ({login, password, checkbox}) => {
    if (login === REACT_APP_DEFAULT_EMAIL && password === REACT_APP_DEFAULT_PASSWORD) {
      navigate(PATH.PROFILE, { replace: true });
    }
    <div className="errorMessageInput" > <img src={error} width="20px" height="20px" style={{paddingLeft:"20px"}}/><span className="errorMessage">Пользователя ${login} не существует</span> </div>;

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="container">
        {errors.login != REACT_APP_DEFAULT_EMAIL && <div>{errors.login}</div>}
        <section>
          <div className="title">Логин</div>
          <input
            {...register('login', { required: true })}
            className={clsx("input",errors.login && "inputError")}
            type="email"
          />
          {errors.login && <div className="error">Обязательное поле</div>}
        </section>
        <section>
          <div className="title">Пароль</div>
          <input
            {...register('password', { required: true })}
            className={clsx("input",errors.password && "inputError")}
            type="password"
          />
          {errors.password && <div className="error">Обязательное поле</div>}
        </section>

        <section>
          <label>
            <input
                {...register('checkbox')}
                type="checkbox"
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
            />
            <span
                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                aria-hidden="true"
            />
            <label className="title">Запомнить меня</label>
          </label>

        </section>
        <input
            className={clsx ("button",isSubmitting && "disableButton" )}
          // className="button"
          type="submit"
          value="Войти"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

/* eslint-disable */
import * as React from 'react';

import '../../styles/App.css';
import { Checkbox } from '@material-ui/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { FormValuesType } from './types';
import { ReturnComponentType } from 'types';
import { PATH } from 'enums';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_DEFAULT_EMAIL , REACT_APP_DEFAULT_PASSWORD  } = process.env;

export const Login = (): ReturnComponentType => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesType>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValuesType> = ({login, password}) => {
    if (login === REACT_APP_DEFAULT_EMAIL && password === REACT_APP_DEFAULT_PASSWORD) {
      navigate(PATH.PROFILE, { replace: true });
    }

    return <div className="errorMessage">Пользователя ${login} не существует</div>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="container">
        <section>
          <div className="title">Логин</div>
          <input
            {...register('login', { required: true })}
            className="input"
            type="email"
          />
          {errors.login && <div className="error">Обязательное поле</div>}
        </section>
        <section>
          <div className="title">Пароль</div>
          <input
            {...register('password', { required: true })}
            className="input"
            type="password"
          />
          {errors.password && <div className="error">Обязательное поле</div>}
        </section>

        <section>
          <Controller
            name="checkbox"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label className="title">Запомнить меня</label>
        </section>
        <input
          className="button"
          type="submit"
          value="Войти"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

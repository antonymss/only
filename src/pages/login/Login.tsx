/* eslint-disable */
import * as React from "react";

import "../../styles/App.css";
import { SubmitHandler, useForm } from "react-hook-form";

import { FormValuesType } from "./types";
import { ReturnComponentType } from "types";
import { PATH } from "enums";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { StyledForm, StyledTitle, StyledTitleLabel } from "./style";
import { Handler } from "common";

const { REACT_APP_DEFAULT_EMAIL, REACT_APP_DEFAULT_PASSWORD } = process.env;

export const Login = (): ReturnComponentType => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesType>({
    mode: "onChange",
    defaultValues: {
      login: "",
    },
  });

  const [state, setState] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout>;

    if (state) {
      timeOutId = setTimeout(() => {
        setState(false);
      }, 2000);
    }
    return () => {
      if (state) {
        clearTimeout(timeOutId);
      }
    };
  }, [state]);

  const onSubmit: SubmitHandler<FormValuesType> = ({
    login,
    password,
    checkbox,
  }) => {
    if (
      login === REACT_APP_DEFAULT_EMAIL &&
      password === REACT_APP_DEFAULT_PASSWORD
    ) {
      navigate(PATH.PROFILE, { replace: true });
    } else {
      setState(true);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {state && <Handler login={getValues("login")} />}
      <div className="container">

        <section>
          <StyledTitle>Логин</StyledTitle>
          <input
            {...register("login", { required: true })}
            className={clsx("input", errors.login && "inputError")}
            type="email"
          />
          {errors.login && <div className="error">Обязательное поле</div>}
        </section>

        <section>
          <StyledTitle>Пароль</StyledTitle>
          <input
            {...register("password", { required: true })}
            className={clsx("input", errors.password && "inputError")}
            type="password"
          />
          {errors.password && <div className="error">Обязательное поле</div>}
        </section>

        <section>
          <label>
            <input
              {...register("checkbox")}
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
              aria-hidden="true"
            />
            <StyledTitleLabel>Запомнить меня</StyledTitleLabel>
          </label>
        </section>

        <input
          className={clsx("button", state && "disableButton")}
          type="submit"
          value="Войти"
          disabled={isSubmitting}
        />
      </div>
    </StyledForm>
  );
};

import * as React from "react";
import './App.css';
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {Checkbox} from "@material-ui/core";
// import styled from "styled-components";

type FormValues = {
    login: string;
    password: string;
    checkbox: boolean;
};

// const FormStyled = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

export function Login() {
    const {
        handleSubmit,
        register,
        control,
        formState: {errors}
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) =>
        alert(JSON.stringify(data));


    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">

            <div className="container">
                <section>
                    <div className="title">Логин</div>
                    <input {...register("login", { required: true }) }  className="input"/>
                    {errors.login && <div className="error">Обязательное поле</div>}
                </section>
                <section>
                    <div className="title">Пароль</div>
                    <input {...register("password", { required: true })} className="input"/>
                    {errors.password && <div className="error">Обязательное поле</div> }
                </section>

                <section>
                    <Controller
                        name="checkbox"
                        control={control}
                        render={({field}) => <Checkbox {...field} />}
                    />
                    <label className="title">Запомнить меня</label>
                </section>
                <input className="button"  type="submit"  value="Войти"/>
            </div>
        </form>
    );
}



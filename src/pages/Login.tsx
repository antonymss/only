import * as React from "react";
import '../App.css';
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {Checkbox} from "@material-ui/core";
import {useState} from "react";
// import { Redirect} from "react-router-dom";
import {PATH} from "../App";
// import styled from "styled-components";
// @ts-ignore
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

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
    const [isDisabled, setDisabled] = useState(false);
    const buttonSubmit = () => {
        setDisabled(!isDisabled);
       const timer =  setTimeout(()=>{

        },2000)
    }
    const {
        handleSubmit,
        register,
        control,
        formState: {errors}
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) =>
        // data.login === "steve.jobs@example.com" && data.password === "password" ? <Redirect to={PATH.PROFILE}/>: <div>Пользователя ${data.login} не существует</div>
        alert(JSON.stringify(data));


    // console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">

            <div className="container">
                <div className="errorMessage">
                    {/*<ErrorRoundedIcon/>*/}
                    Пользователя  не существует</div>
                <section>
                    <div className="title">Логин</div>
                    <input {...register("login", {required: true})} className="input" type="email"/>
                    {errors.login && <div className="error">Обязательное поле</div>}
                </section>
                <section>
                    <div className="title">Пароль</div>
                    <input {...register("password", {required: true})} className="input" type="password"/>
                    {errors.password && <div className="error">Обязательное поле</div>}
                </section>

                <section>
                    <Controller
                        name="checkbox"
                        control={control}
                        render={({field}) => <Checkbox {...field} />}
                    />
                    <label className="title">Запомнить меня</label>
                </section>
                <input  className="button" type="submit" value="Войти" onClick={buttonSubmit} disabled={false}/>
            </div>
        </form>
    );
}



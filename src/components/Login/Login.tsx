import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import classes from './Login.module.css'
import {InitialStateType, loginIn} from "../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";


export type Inputs = {
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
};
export const Login = React.memo(() => {
    const {isAuth} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    if (isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
})
export const LoginForm = React.memo(() => {
    const {captchaUrl} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const {message} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: "onChange"});
    const onSubmit: SubmitHandler<Inputs> = (data) => dispatch(loginIn(data.email, data.password, data.rememberMe, data.captcha))
    return (
        <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="email" {...register('email', {required: true, maxLength: 30})} />
            {errors.email && <span>field is errored</span>}
            <input type={'password'} placeholder="password"{...register("password", {required: true})} />
            {errors.password && <span>field is errored</span>}
            <input type='checkbox'{...register("rememberMe")} />
            {message && <div className={classes.errorMessage}>{message}</div>}
            {captchaUrl && <>
                <img src={captchaUrl} alt=""/>
                <input placeholder="captcha" {...register('captcha', {required: true, maxLength: 10})} />
                {errors.captcha && <span>field is errored</span>}
            </>
            }
            <input value={'Sign in'} type="submit"/>
        </form>
    )
})
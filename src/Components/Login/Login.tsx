import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

import {RequestsAPI} from "../../Api/api";


type fromDataType = {
    Email: string
    Password: string
    rememberMe:boolean
}

const LoginForm = (props: InjectedFormProps<fromDataType>) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={'Email'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'Password'} component={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
        </div>
        <button>Submit</button>
    </form>

}

const LoginReduxForm = reduxForm<fromDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (fromData : fromDataType) =>{
        console.log(fromData)
        console.log(fromData.Email)
        console.log(fromData.Password)
        RequestsAPI.auth.login(fromData.Email, fromData.Password)
    }
    return <div>
        <h1>LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}




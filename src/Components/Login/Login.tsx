import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

import {RequestsAPI} from "../../Api/api";
import {maxLength, required} from "../../Utils/Validators";
import {Input} from "../../Utils/FormControls";


type fromDataType = {
    Email: string
    Password: string
    rememberMe:boolean
}
const maxLength10 = maxLength(10)
const LoginForm = (props: InjectedFormProps<fromDataType>) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required,maxLength10]} placeholder={"Email"} name={'Email'} component={Input}/>
        </div>
        <div>
            <Field validate={[required,maxLength10]} placeholder={'Password'} name={'Password'} component={Input}/>
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




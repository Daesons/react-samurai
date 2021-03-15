import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type formPropsType = {
     newMessage: string
}


export const AddMessageReduxForm = reduxForm<formPropsType>({form: 'addMessage'})(AddMessageForm)

function AddMessageForm(props: InjectedFormProps<formPropsType>) {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Message'} name={'newMessage'} component={'textarea'}/>
        </div>
        <div>
            <button>Add Message</button>
        </div>
    </form>

}
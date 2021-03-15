import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {TextArea} from "../../Utils/FormControls";
import {maxLength, required} from "../../Utils/Validators";

type formPropsType = {
     newMessage: string
}

const maxLength30 = maxLength(30)

export const AddMessageReduxForm = reduxForm<formPropsType>({form: 'addMessage'})(AddMessageForm)

function AddMessageForm(props: InjectedFormProps<formPropsType>) {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required,maxLength30 ]} placeholder={'Message'} name={'newMessage'} component={TextArea}/>
        </div>
        <div>
            <button>Add Message</button>
        </div>
    </form>

}
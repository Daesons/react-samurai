import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../../../Utils/FormControls";
import {maxLength, required} from "../../../Utils/Validators";

type addPostFormType = {
    newPostMessage: string
}

const maxLength30 = maxLength(30)

export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'newPostMessage'})(AddPostForm)

function AddPostForm(props: InjectedFormProps<addPostFormType>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required,maxLength30 ]} placeholder={'Post message'} name={'newPostMessage'} component={TextArea}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}
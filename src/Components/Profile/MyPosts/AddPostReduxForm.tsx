import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

type addPostFormType = {
    newPostMessage: string
}
export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'newPostMessage'})(AddPostForm)

function AddPostForm(props: InjectedFormProps<addPostFormType>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Post message'} name={'newPostMessage'} component={'textarea'}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}
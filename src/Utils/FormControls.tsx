import React from "react";
import {WrappedFieldProps} from "redux-form";

type propsType = {
    el:string
}

function FormControls ( props: WrappedFieldProps & propsType) {
    debugger
    return <div>
        {React.createElement(props.el, props.input)}
        {props.meta.visited &&
        ((props.meta.error && <span>{props.meta.error}</span>) ||
            (props.meta.warning && <span>{props.meta.warning}</span>))}

    </div>
}

export function Input (props: WrappedFieldProps) {
    const {input, meta} = props
    return <div>
        <FormControls el={'input'}
                      input={input}
                      meta={meta}/>
    </div>
}

export function TextArea (props: WrappedFieldProps) {
    debugger
    const {input,meta} = props
    return <div>
        <FormControls el={'textarea'}
                      input={input}
                      meta={meta}/>
    </div>
}
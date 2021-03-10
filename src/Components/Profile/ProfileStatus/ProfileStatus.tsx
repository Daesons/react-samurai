import React, {ChangeEvent} from "react";
import {RequestsAPI} from "../../../Api/api";


type propsType = {
    status : string
    setUserStatus: (title:string)=> void
}

export class ProfileStatus extends React.Component<propsType, any> {

    state = {
        editMode: false
    }

    activatedMode = () =>{
        this.setState({
            editMode : true
        })
    }
    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
        RequestsAPI.profile.changeStatus(this.props.status)
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        this.props.setUserStatus(e.currentTarget.value)
    }
    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onChange} value={this.props.status} autoFocus={true} onBlur={this.deactivatedMode}/>
                    </div>
                    :
                    <div onDoubleClick={this.activatedMode}>
                        {this.props.status}
                    </div>
                }
            </>
        );
    }
}
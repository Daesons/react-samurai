import React from "react";


type propsType = {
    status : string
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
    }
    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivatedMode}/>
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
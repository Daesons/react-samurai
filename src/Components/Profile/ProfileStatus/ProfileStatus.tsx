import React from "react";


export class ProfileStatus extends React.Component<any, any> {

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
                        <input autoFocus={true} onBlur={this.deactivatedMode}/>
                    </div>
                    :
                    <div onDoubleClick={this.activatedMode}>
                        {'kek'}
                    </div>
                }
            </>
        );
    }
}
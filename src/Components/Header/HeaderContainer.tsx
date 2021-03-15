import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/AuthReducer";
import {stateType} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth?: boolean
    login: string | null

}

type mapDispatchToPropsType = {
    getAuthUserData:()=>void
}

class HeaderContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
    componentDidMount() {
      this.props.getAuthUserData()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: stateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
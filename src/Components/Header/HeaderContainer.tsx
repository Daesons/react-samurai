import React from "react";
import {Header} from "./Header";
import {setIsFetching} from "../redux/UsersPageReducer";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../redux/AuthReducer";
import {stateType} from "../redux/redux-store";
import {RequestsAPI} from "../../Api/api";

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
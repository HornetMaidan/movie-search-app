import { connect } from 'react-redux';
import {nameReducer} from "./reducers/nameReducer";

function GetUserName(props) {
    return (
        <div className='usernameInput'>
            <input value={nameReducer.username}
            type='text'
            onChange={props.onChangeName}
            placeholder='username...'/>
            <h4>hello, {props.username}.</h4>
        </div>
    )
}

function mapStateToProps(state) {

    const { nameReducer } = state;
    return {
        username: nameReducer.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeName: () => {
            return dispatch({type: 'CHANGE_NAME'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetUserName);
import {combineReducers} from 'redux';
import {reducer as reduxform} from 'redux-form'
import authReducers from './authReducers';

export default combineReducers({
    auth:authReducers,
    form:reduxform

})
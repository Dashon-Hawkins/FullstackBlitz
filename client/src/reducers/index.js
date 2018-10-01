import {combineReducers} from 'redux';
import {reducer as reduxform} from 'redux-form'
import authReducers from './authReducers';
import fetchingsurveysReducer from './fetchsurveysReducer'

export default combineReducers({
    auth:authReducers,
    form:reduxform,
    fetchingSurveys:fetchingsurveysReducer

})
import {createStore} from 'redux';
import reducer from './ducks/users';
//always import the reducer, and then invoke createStore with reducer
export default createStore(reducer);
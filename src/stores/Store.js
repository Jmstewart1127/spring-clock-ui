import { createStore } from 'redux'
import login from './reducers/login.js'

let store = createStore(login);

import {createStore} from 'redux'
import { storeAll } from './reducers'

let store = createStore(storeAll)

export default store

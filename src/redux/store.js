import {createStore} from 'redux'
// import { todoApp } from '@/redux/reducers'
import { storeAll } from './reducers'

let store = createStore(storeAll)

export default store

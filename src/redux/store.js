import {createStore} from 'redux'
import { todoApp } from '@/redux/reducers'

let store = createStore(todoApp)

export default store

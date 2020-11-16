// import { combineReducers } from 'redux'

import { combineReducers } from "redux"

// export const todos = (state = [], action) => {
//   switch (action.type) {
//   case 'ADD_TODO':
//     return [
//       ...state,
//       {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }
//     ]
//   case 'TOGGLE_TODO':
//     return state.map(todo =>
//       (todo.id === action.id)
//         ? {...todo, completed: !todo.completed}
//         : todo
//     )
//   default:
//     return state
//   }
// }

// export const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch (action.type) {
//   case 'SET_VISIBILITY_FILTER':
//     return action.filter
//   default:
//     return state
//   }
// }

// export const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
const initState = {conut: 0}
export const reducer = (state = initState, action) => {
  console.log('reducer:', action)
  switch (action.type) {
    case 'add_action':
      return {
        conut: state.conut + 1
      }
    default:
      return state
  }
}

const initObj = {number: 0}
export const counter = (state = initObj, action) => {
  console.log('reducer:', action)
  switch (action.type) {
    case 'add_number':
      return {
        number: state.number + 1
      }
    default:
      return state
  }
}

export const storeAll = combineReducers({
  reducer,
  counter
})

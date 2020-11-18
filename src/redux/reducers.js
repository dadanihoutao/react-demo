import { combineReducers } from "redux"


const initState = {count: 0}
export const calculation = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        count: state.count + 1
      }
    case 'REDUCE_COUNT':
      return {
        count: state.count > 0 ? state.count - 1 : 0
      }
    default:
      return state
  }
}

const initTmList = {data: []}
export const tmList = (state = initTmList, action) => {
  console.log('tmList.reducer:', state, action)
  switch (action.type) {
    case 'SET_TMLIST':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export const storeAll = combineReducers({
  calculation,
  tmList
})

export const addCount = () => {
  return {
    type: 'ADD_COUNT'
  }
}

export const reduceCount = () => {
  return {
    type: 'REDUCE_COUNT'
  }
}

export const settmData = (data) => {
  return {
    type: 'SET_TMLIST',
    data
  }
}

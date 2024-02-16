export const INITIAL_STATE = {
  num: 0,
  res: '',
  operation: '',
  arrResutls: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'RESULTADO':
      const operation = getResult(
        state.num,
        parseInt(action.num),
        state.operation
      )

      return {
        ...state,
        res: operation,
        arrResutls: [...state.arrResutls, operation],
        num: 0
      }
    default:
      return {
        ...state,
        num: parseInt(action.num),
        operation: action.type
      }
  }
}

const getResult = (num1, num2, operation) => {
  switch (operation) {
    case 'SUMA':
      return num1 + num2
    case 'RESTA':
      return num1 - num2
    case 'MULTI':
      return num1 * num2
    case 'DIVISION':
      return num1 / num2
    case 'RESTO':
      return num1 % num2
    default:
      return num1 + num2
  }
}

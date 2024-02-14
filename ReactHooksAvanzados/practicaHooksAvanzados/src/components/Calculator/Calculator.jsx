import { useReducer } from 'react'
import './Calculator.css'
import { INITIAL_STATE, reducer } from '../../utils/reducer'

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <div className='calculator'>
      <input type='number' id='num' />
      <div className='btnCal'>
        <button onClick={() => dispatch({ type: 'SUMA' })}>+</button>
        <button onClick={() => dispatch({ type: 'RESTA' })}>-</button>
        <button onClick={() => dispatch({ type: 'MULTI' })}>X</button>
        <button onClick={() => dispatch({ type: 'DIVISION' })}>/</button>
        <button onClick={() => dispatch({ type: 'RESTO' })}>%</button>
        <button onClick={() => dispatch({ type: 'RESULTADO' })}>=</button>
      </div>
      <h2>Último resultado: {state.res}</h2>
      <h2>Resultados históricos</h2>
      <ul>
        {state.arrResutls
          .sort((a, b) => a - b)
          .map((result, index) => {
            return <li key={index}>{result}</li>
          })}
      </ul>
    </div>
  )
}

export default Calculator

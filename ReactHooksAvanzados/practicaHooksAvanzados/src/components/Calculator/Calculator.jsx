import { memo, useMemo, useReducer, useRef } from 'react'
import './Calculator.css'
import { INITIAL_STATE, reducer } from '../../utils/reducer'

const Calculator = memo(() => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const refInput = useRef()

  useMemo(() => {
    state.arrResutls.sort((a, b) => a - b)
  }, [state.arrResutls])

  return (
    <div className='calculator'>
      <input ref={refInput} type='number' id='num' />
      <div className='btnCal'>
        <button
          onClick={() => {
            dispatch({ type: 'SUMA', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESTA', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'MULTI', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DIVISION', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESTO', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          %
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESULTADO', num: refInput.current.value })
            refInput.current.value = ''
          }}
        >
          =
        </button>
      </div>
      <h2>Último resultado: {state.res}</h2>
      <h2>Resultados históricos</h2>
      <ul>
        {state.arrResutls.map((result, index) => {
          return <li key={index}>{result}</li>
        })}
      </ul>
    </div>
  )
})

export default Calculator

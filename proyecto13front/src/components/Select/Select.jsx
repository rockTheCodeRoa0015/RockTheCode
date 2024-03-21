import StyledSelect from './Select.style'

const Select = ({ list, setValue }) => {
  return (
    <StyledSelect onChange={(e) => setValue(e.target.value)}>
      <option value='all'>Seleccione una categoría</option>
      {list &&
        list.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.categorie}
            </option>
          )
        })}
    </StyledSelect>
  )
}

export default Select

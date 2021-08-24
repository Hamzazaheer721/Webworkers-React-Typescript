import styled from 'styled-components'

const InputField = styled.input`
  font-family: inherit;
  width: 300px;
  outline: 0;
  color: #fff;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  background: transparent;
  font-size: 1.3rem;
  padding: 7px 0;
  ::placeholder {
    color: white;
    font-size: 1.3rem;
    padding: 10px;
    opacity: 0.7;
  }
`
export default InputField;
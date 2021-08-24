import {
  FC, memo, useRef,
} from 'react';
import debounce from 'lodash/debounce'
import { InputField, InputWrapper } from './index.styled';

interface InputPropsComponent {
  // eslint-disable-next-line no-unused-vars
  changeValue : (_val : string) => void;
}

const InputComponent : FC<InputPropsComponent> = memo(({ changeValue }: InputPropsComponent) => {
  const valueRef = useRef<HTMLInputElement | null>(null)

  const changeInput = debounce(() => {
    valueRef.current && changeValue(valueRef.current.value);
  }, 1000)

  return (
    <InputWrapper>
      <InputField type="text" placeholder="Write something" ref={valueRef} onChange={changeInput} />
    </InputWrapper>
  )
})

export default InputComponent;

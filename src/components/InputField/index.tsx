import {
  ChangeEvent, useCallback, FC, useState, memo,
} from 'react';
import { InputField, InputWrapper } from './index.styled';

interface InputPropsComponent {
  // eslint-disable-next-line no-unused-vars
  changeValue : (_val : string) => void;
}

const InputComponent : FC<InputPropsComponent> = memo(({ changeValue }: InputPropsComponent) => {
  const [value, setValue] = useState<string>('')

  const changeInput = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    changeValue(e.target.value);
  }, [])

  return (
    <InputWrapper>
      <InputField type="text" placeholder="Write something" value={value} onChange={changeInput} />
    </InputWrapper>
  )
})

export default InputComponent;

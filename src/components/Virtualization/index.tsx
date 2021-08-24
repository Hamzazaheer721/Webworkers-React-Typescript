/* eslint-disable no-console */
import {
  useCallback, FC, memo, useState,
} from 'react';
import Data from '../../assets/json/generated.json'
import { IDataType } from '../../helper/types';
import InputComponent from '../InputField';
import TableComponent from '../Table';
import { Heading, Wrapper } from './index.styled';

const VirtualizedComponent: FC = memo(() => {
  const [data] = useState<IDataType[]>(Data)
  const [value, setValue] = useState<string>('');

  const changeValue = useCallback((_val : string) => {
    setValue(_val)
  }, [])

  return (
    <Wrapper>
      <Heading>Virtualized Component</Heading>
      <InputComponent changeValue={changeValue} />
      <TableComponent data={data} value={value} />
    </Wrapper>

  )
});

export default VirtualizedComponent;

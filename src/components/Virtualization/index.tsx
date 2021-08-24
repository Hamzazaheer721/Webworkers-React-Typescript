/* eslint-disable no-console */

import {
  useCallback, useEffect, FC, memo, useState,
} from 'react';
import Data from '../../assets/json/generated.json'
import InputComponent from '../InputField';
import TableComponent from '../Table';
import { Heading, Wrapper } from './index.styled';

interface IDataProps {
    phone: string,
    address: string,
    _id: string,
    guid: string,
    picture: string,
    age : number,
    name: string,
    gender: string,
    company: string,
    email: string

}

const VirtualizedComponent: FC = memo(() => {
  const [data] = useState<IDataProps[]>(Data)
  const [value, setValue] = useState<string>('');

  const changeValue = useCallback((_val : string) => {
    setValue(_val)
  }, [])
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info('value', value)
  }, [data])

  return (
    <Wrapper>
      <Heading>Virtualized Component</Heading>
      <InputComponent changeValue={changeValue} />
      <TableComponent />
    </Wrapper>

  )
});

export default VirtualizedComponent;

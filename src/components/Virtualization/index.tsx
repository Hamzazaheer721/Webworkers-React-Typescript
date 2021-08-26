/* eslint-disable no-console */
import {
  useCallback, FC, memo, useState,
} from 'react';
import Data from '../../assets/json/generated.json'
import IDataType from '../../helper/types';
import InputComponent from '../InputField';
import TableComponent from '../Table';
import VirtualTable from '../VirtualTable';
import { Heading, Wrapper } from './index.styled';

const VirtualizedComponent: FC = memo(() => {
  const [data] = useState<IDataType[]>(Data)
  const [value, setValue] = useState<string>('');

  const changeValue = useCallback((_val: string) => {
    setValue(_val)
  }, [])
  // Usage
  const columns = [
    { title: 'Name', dataIndex: 'name', width: 150 },
    { title: 'Age', dataIndex: 'age', width: 90 },
    { title: 'Gender', dataIndex: 'gender', width: 220 },
    { title: 'Company', dataIndex: 'company', width: 200 },
    { title: 'Email', dataIndex: 'email', width: 300 },
  ];

  const virtualData = Array.from(data);
  return (
    <Wrapper>
      <Heading>Virtualized Component</Heading>
      <InputComponent changeValue={changeValue} />
      <TableComponent data={data} value={value} />
      <VirtualTable columns={columns} dataSource={virtualData} scroll={{ y: 300, x: '100vw' }} />
    </Wrapper>

  )
});

export default VirtualizedComponent;

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
    { title: 'A', dataIndex: 'key', width: 150 },
    { title: 'B', dataIndex: 'key' },
    { title: 'C', dataIndex: 'key' },
    { title: 'D', dataIndex: 'key' },
    { title: 'E', dataIndex: 'key', width: 200 },
    { title: 'F', dataIndex: 'key', width: 100 },
  ];

  const virtualData = Array.from({ length: 100000 }, (_, key) => ({ key }));
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

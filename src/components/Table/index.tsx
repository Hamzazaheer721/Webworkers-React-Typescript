/* eslint-disable no-console */
import { FC, memo } from 'react';
import IDataType from '../../helper/types';

interface ITableProps{
  data : IDataType[],
  value: string
}
const TableComponent: FC<ITableProps> = memo(({ data, value }: ITableProps) => {
  console.log('Data', data)
  console.log('value', value)
  return (
    <table>
      <th>
        hmm
      </th>
    </table>
  )
})

export default TableComponent

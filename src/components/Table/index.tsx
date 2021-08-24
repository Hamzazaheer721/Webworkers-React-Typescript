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
      <thead>
        <tr>
          <th> Age </th>
          <th> Name </th>
          <th> Gender </th>
          <th> Email </th>
        </tr>
      </thead>
      {data.map((row) => (
        <tbody>
          <tr>{row.age}</tr>
          <tr>{row.name}</tr>
          <tr>{row.gender}</tr>
          <tr>{row.email}</tr>
        </tbody>
      ))}
    </table>
  )
})

export default TableComponent

/* eslint-disable no-console */
import { FC, memo } from 'react';
import IDataType from '../../helper/types';
import { Table, TableWrapper } from './index.styled';

interface ITableProps{
  data : IDataType[],
  value: string
}
const TableComponent: FC<ITableProps> = memo(({ data, value }: ITableProps) => {
  console.log('Data', data)
  console.log('value', value)
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th> Age </th>
            <th> Name </th>
            <th> Gender </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr id={row._id}>
              <td>{row.age}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
})

export default TableComponent

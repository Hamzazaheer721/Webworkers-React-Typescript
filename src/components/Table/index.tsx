import {
  FC, memo, useCallback, useEffect, useState,
} from 'react';
import IDataType from '../../helper/types';
import { Table, TableWrapper } from './index.styled';

interface ITableProps {
  data: IDataType[],
  value: string
}

const TableComponent: FC<ITableProps> = memo(({ data, value }: ITableProps) => {
  const [filteredData, setFilteredData] = useState<IDataType[]>(data)
  const worker: Worker = new Worker('./workers/worker.js')

  useEffect(() => {
    worker.onmessage = (e: MessageEvent) => {
      setFilteredData(e.data);
    }
  }, [worker])

  const filterData = useCallback(() => {
    worker.postMessage([data, value])
  }, [value])

  useEffect(() => {
    filterData();
  }, [value])

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
          {filteredData.map((row) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr key={row._id}>
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

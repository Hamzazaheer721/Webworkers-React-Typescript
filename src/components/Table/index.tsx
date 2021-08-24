import { FC, memo } from 'react';
import IDataType from '../../helper/types';

interface ITableProps{
  data : IDataType[]
}
const TableComponent: FC<ITableProps> = memo(({ data }: ITableProps) => (
  <table>
    <th>
      hmm
    </th>
  </table>
))

export default TableComponent

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  FC, memo, UIEvent, UIEventHandler, useCallback, useEffect, useRef, useState,
} from 'react';
import { IDataType, ISettingsType } from '../../helper/types';
import { Table, TableWrapper } from './index.styled';

interface ITableProps {
  data: IDataType[],
  value: string
}
const InitialValue: ISettingsType = {
  itemHeight: 20,
  amount: 15,
  tolerance: 15,
  minIndex: 1,
  maxIndex: 392,
  startIndex: 1,
}

const TableComponent: FC<ITableProps> = memo(({ data, value }: ITableProps) => {
  const [filteredData, setFilteredData] = useState<IDataType[]>(data)
  const worker: Worker = new Worker('./workers/worker.js')
  const tableRef = useRef<HTMLDivElement>(null)

  const settings: ISettingsType = InitialValue;

  const [viewportHeight, setViewportHeight] = useState<number>(settings.amount * settings.itemHeight);
  const [totalHeight, setTotalHeight] = useState<number>((settings.maxIndex - settings.minIndex + 1) * settings.itemHeight);
  const [toleranceHeight, setToleranceHeight] = useState<number>(settings.tolerance * settings.itemHeight);
  const [bufferHeight, setBufferHeight] = useState<number>(viewportHeight + 2 * toleranceHeight);
  const [bufferedItems, setBufferedItems] = useState<number>(settings.amount + 2 * settings.tolerance);
  const [itemsAbove, setItemsAbove] = useState<number>(settings.startIndex - settings.tolerance - settings.minIndex);
  const [topPaddingHeight, setTopPaddingHeight] = useState<number>(itemsAbove * settings.itemHeight);
  const [bottomPaddingHeight, setBottomPaddingHeight] = useState<number>(totalHeight - topPaddingHeight);
  const [initialPosition, setInitialPosition] = useState<number>(topPaddingHeight + toleranceHeight);
  const [virtualData, setVirtualData] = useState<any>([]);

  const getData = (offset: number, limit: number) => {
    // eslint-disable-next-line no-underscore-dangle
    const _data = [];
    const start = Math.max(settings.minIndex, offset);
    const end = Math.min(offset + limit - 1, settings.maxIndex);
    console.log(
      `request [${offset}..${offset + limit - 1}] -> [${start}..${end}] items`,
    );
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        _data.push(data[i]);
      }
    }
    return _data;
  };

  const passScroller = useCallback((scrollTop: number) => {
    const index = settings.minIndex + Math.floor((scrollTop - toleranceHeight) / settings.itemHeight);
    const _data = getData(index, bufferedItems);
    console.log('data : ', _data)
    const _topPaddingHeight = Math.max((index - settings.minIndex) * settings.itemHeight, 0);
    const _bottomPaddingHeight = Math.max(
      totalHeight - topPaddingHeight - _data.length * settings.itemHeight,
      0,
    );
    setTopPaddingHeight(_topPaddingHeight);
    setBottomPaddingHeight(_bottomPaddingHeight);
    setVirtualData(_data)
  }, [])

  const runScroller = useCallback((e: UIEvent<HTMLDivElement>) => {
    const { target } = e;
    passScroller((e.target as HTMLDivElement).scrollTop)
  }, [])

  // to fetch the filtered data
  useEffect(() => {
    worker.onmessage = (e: MessageEvent) => {
      setFilteredData(e.data);
    }
  }, [worker])

  // sending data to webworker for filtering
  const filterData = useCallback(() => {
    worker.postMessage([data, value])
  }, [value])

  // filter data on value change
  useEffect(() => {
    filterData();
  }, [value])

  // UseEffect for initialPosition
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = initialPosition;
      if (!initialPosition) {
        passScroller(0);
      }
    }
  }, [])

  return (
    <TableWrapper ref={tableRef} onScroll={runScroller} height={viewportHeight}>
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
          <div style={{ height: topPaddingHeight }} />
          {virtualData.map((row: any) => (
            // eslint-disable-next-line no-underscore-dangle
            <tr key={row._id}>
              <td>{row.age}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.email}</td>
            </tr>
          ))}
          <div style={{ height: bottomPaddingHeight }} />
        </tbody>
      </Table>
    </TableWrapper>
  )
})

export default TableComponent

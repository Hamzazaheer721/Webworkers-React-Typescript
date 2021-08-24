/* eslint-disable no-console */
import {
  useEffect, FC, memo, useState,
} from 'react';
import Data from '../../assets/json/generated.json'

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

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info('data', data)
  }, [data])

  return (
    <h1>Virtualized Component</h1>
  )
});

export default VirtualizedComponent;

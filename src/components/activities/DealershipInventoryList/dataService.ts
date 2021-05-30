import { useMemo } from 'react';
// GraphQL
import {
  useDealershipInventoryListQuery as useBaseQuery,
  DealershipInventoryListQuery,
  Vehicle
} from 'generated/graphql';

import { dealershipId } from '../DealershipInventoryPage/DealershipInventoryPage';
export interface ListData {
  // vehicle: Vehicle;
  dealership: DealershipInventoryListQuery;
}
// export interface ListData {
//   vehicles: ListData[];
// }

// interface Props {
//   type: string;
// }

export const useDealershipInventoryListQuery = () => {
// export const useDealershipInventoryListQuery = ({ type }: Props) => {
  const tuple = useBaseQuery({
      variables: { id: dealershipId },
    }
  );

  // const displayList: ListData = {
  //   vehicles: []
  // };

  let displayList = tuple.data?.dealership.vehicles
  // const type = 'all'
  // // const type = 'jetSki'

  // const filterList = useMemo(
  //   () => 
  //     (tuple.data?.dealership.vehicles || []).filter(x => x.type.name.includes(type)),
  //   // 2. what data is going to change, is going to trigger to re-run the CPU compute intensive function
  //   // -> when data chagnes, it will re-compute portlandTaps
  //   // [data] is the same concept as the second arg in useEffect 
  //   // [tuple.data?.dealership.vehicles]
  //   [tuple.data?.dealership.vehicles]
  // );

  // if (type === 'all') {
  //   console.log('40 when type is all')
  //   displayList = tuple.data?.dealership.vehicles
  // } else {
  //   console.log('43 for specific type')
  //   displayList = filterList
  // }
  console.log(displayList)


  return {
    ...tuple,
  };
}

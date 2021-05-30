import * as React from 'react';
import _ from 'lodash';
// GraphQL
import {
  useDealershipInventoryListQuery as useBaseQuery,
  DealershipInventoryListQuery
} from 'generated/graphql';
// import { dealershipId } from '../DealershipInventoryPage';
const dealershipId = '3781905c-5402-44f7-9e3b-972adbea9855';

export interface ListData {
  dealership: DealershipInventoryListQuery;
}

// export const useDealershipInventoryListQuery = ({type}:{type:string}) => {
export const useDealershipInventoryListQuery = () => {
  const tuple = useBaseQuery({
      variables: { id: dealershipId },
    }
  );

  // React.useEffect(() => {
  //   tuple.refetch()
  // }, [])

  // let type = 'all'
  let type = 'rv'
  // console.log('type ' + type)
  let displayList;
  
  if (type === 'all') {
    console.log('108 type is all')
    displayList = tuple.data?.dealership.vehicles;
  }
  else {
    console.log('112 specific type: '+ type)
    displayList = _.filter(tuple.data?.dealership.vehicles,
      {type: {name: type}}
    )
  }

  return {
    ...tuple,
    displayList
  };
}
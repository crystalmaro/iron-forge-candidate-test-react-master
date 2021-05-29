import * as React from 'react';
import _ from 'lodash';
// GraphQL
import {
  useDealershipInventoryListQuery as useBaseQuery,
  DealershipInventoryListQuery
} from 'generated/graphql';

export interface ListData {
  dealership: DealershipInventoryListQuery;
}

export const useDealershipInventoryListQuery = () => {
  const tuple = useBaseQuery({
      variables: { id: '3781905c-5402-44f7-9e3b-972adbea9855' },
    }
  );
  console.log('18 data service')
  console.log(tuple)

  return {
    ...tuple,
  };
}


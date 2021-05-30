import _ from 'lodash';
// GraphQL
import {
  useDealershipInventoryHeaderQuery as useBaseQuery,
  VehicleType,
  DealershipInventoryHeaderQuery
} from 'generated/graphql';
// import { dealershipId } from '../DealershipInventoryPage';
const dealershipId = '3781905c-5402-44f7-9e3b-972adbea9855';
export interface HeaderData {
  dealership: DealershipInventoryHeaderQuery;
}

export const useDealershipInventoryHeaderQuery = () => {
  const tuple = useBaseQuery({
      variables: { id: dealershipId },
    }
  );
  const allInventory: VehicleType = {
    id: 'all',
    displayName: 'All Inventory',
    name: 'all'
  }
  const uniqueVehicleTypes = _.uniqWith(
    tuple.data?.dealership.vehicles, _.isEqual)
    .map(x => x.type);
  uniqueVehicleTypes.unshift(allInventory);  

  return {
    ...tuple,
    uniqueVehicleTypes
  };
}


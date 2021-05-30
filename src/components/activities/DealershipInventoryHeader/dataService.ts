import _ from 'lodash';
// GraphQL
import {
  useDealershipInventoryHeaderQuery as useBaseQuery,
  VehicleType,
  DealershipInventoryHeaderQuery
} from 'generated/graphql';
import { dealershipId } from '../DealershipInventoryPage/DealershipInventoryPage';
export interface HeaderData {
  dealership: DealershipInventoryHeaderQuery;
}

// interface Props {
//   id: number;
// }
// const LaunchProfileContainer = ({ id }: Props) => {
//   const { data, error, loading, refetch } = useLaunchProfileQuery({
//     variables: { id: String(id) },
//   });



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


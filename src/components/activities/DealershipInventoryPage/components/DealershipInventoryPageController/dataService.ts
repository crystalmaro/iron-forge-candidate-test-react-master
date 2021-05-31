
import * as React from 'react';
import _ from 'lodash';
import {
  useDealershipInventoryPageControllerQuery as useBaseQuery,
  VehicleType,
} from 'generated/graphql';
// import { dealershipId } from '../../DealershipInventoryPage';
import { dealershipId } from '../../../../../App';
interface Props {
  selectedVehicleType: string;
  searchKey: string;
}

export const useDealershipInventoryPageControllerQuery = (
  { selectedVehicleType, searchKey }: Props
) => {

  const tuple = useBaseQuery(
    {
      variables: { id: String(dealershipId) }
    }
  );

  const filterInventory = React.useCallback(( invt ) => {
    let searchResults = invt;

    if ( searchKey !== '' ) {
      searchResults = _.filter(invt, x => {
        if ( _.includes(( x.name ).toLowerCase(), ( searchKey ).toLowerCase() )) return x;
      })
    }
  
    if ( selectedVehicleType === 'all' ) return searchResults;
    else return _.filter( searchResults, { type: { name: selectedVehicleType }});
  }, [ selectedVehicleType, searchKey ]);

  const inventoryList = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return [];
    else return filterInventory( tuple.data.dealership.vehicles );
  }, [ tuple, filterInventory ]);

  const dealership = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;
    return tuple.data?.dealership;
  }, [ tuple ]);

  const vehicleTypeList = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;

    const allInventoryType: VehicleType = {
      id: 'all',
      displayName: 'All Inventory',
      name: 'all'
    }

    const uniqueVehicleTypes = _.uniqWith(
      tuple.data?.dealership.vehicles, _.isEqual)
      .map(vehicle => vehicle.type);

    const vehicleTypes = _.uniqWith(uniqueVehicleTypes, _.isEqual);
    vehicleTypes.unshift(allInventoryType);
    return vehicleTypes;
  }, [ tuple ]);

  return {
    inventoryList,
    dealership,
    vehicleTypeList,
  };
}

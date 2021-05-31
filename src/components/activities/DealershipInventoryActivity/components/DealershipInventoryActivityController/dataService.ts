
import * as React from 'react';
import _ from 'lodash';
import {
  useDealershipInventoryActivityControllerQuery as useBaseQuery,
  VehicleType,
  Vehicle,
} from 'generated/graphql';
import { dealershipId } from '../../../../../App';

interface Props {
  selectedVehicleType: string;
  searchKey: string;
}

export interface IDealership {
  address: string;
  id: string;
  logoUrl: string;
  name: string;
}

export const useDealershipInventoryActivityControllerQuery = (
  { selectedVehicleType, searchKey }: Props
) => {

  const tuple = useBaseQuery(
    {
      variables: { id: String( dealershipId ) }
    }
  );

  const filterInventory = React.useCallback(( invt ) => {
    let searchResults: Vehicle[] = _.orderBy( invt, [ 'name' ]);

    if ( searchKey !== '' ) {
      searchResults = _.filter(invt, str => {
        if ( _.includes(( str.name ).toLowerCase(), ( searchKey ).toLowerCase() )) {
          return str;
        }
      })
    }

    if ( selectedVehicleType === 'all' ) return searchResults;
    else return _.filter( searchResults, { type: { name: selectedVehicleType }});
  }, [ selectedVehicleType, searchKey ]);

  const inventoryList: Vehicle[] = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return [];
    else return filterInventory( tuple.data.dealership.vehicles );
  }, [ tuple, filterInventory ]);

  const dealership: ( IDealership | undefined ) = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;
    return _.omit( tuple.data?.dealership, 'vehicles' );
  }, [ tuple ]);

  const vehicleTypeList: ( VehicleType[] | undefined ) = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;
    const allInventoryType: VehicleType = {
      id: 'all',
      displayName: 'All Inventory',
      name: 'all'
    }
    const vehicleTypes = _.uniqWith(
      _.map(tuple.data?.dealership.vehicles,
        (vehicle): VehicleType => vehicle.type),
      _.isEqual
    );
  
    vehicleTypes.unshift( allInventoryType );
    return vehicleTypes;
  }, [ tuple ]);

  return {
    inventoryList,
    dealership,
    vehicleTypeList,
  };
}

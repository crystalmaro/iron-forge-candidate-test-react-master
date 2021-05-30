
import * as React from 'react';
import _, { filter } from 'lodash';
// GraphQL
import {
  Dealership,
  useDealershipInventoryPageControllerQuery as useBaseQuery,
  VehicleType,
  Vehicle
} from 'generated/graphql';

import { dealershipId } from '../../DealershipInventoryPage';
interface Props {
  selectedVehicleType: string;
  searchKey: string;
}

export const useDealershipInventoryPageControllerQuery = (
  { selectedVehicleType, searchKey }: Props
) => {
  // const [initialData, setInitialData] = React.useState<Object[]>();

  const tuple = useBaseQuery({
      variables: { id: String(dealershipId) }
    }
  );
  console.log('tuple', tuple)

  const filterInventory = React.useCallback((invt, searchKey = '') => {
    // setInitialData(invt);
    let searchResults = invt;

    if (searchKey !== '') {
      searchResults = _.filter(invt, x => {
        if (_.includes(x.name, searchKey)) return x
      })
    }

    if ( selectedVehicleType === 'all' ) {
      return searchResults;
    } else {
      searchResults = _.filter(searchResults, {type: {name: selectedVehicleType}});
      return searchResults;
    }
  }, [ selectedVehicleType, searchKey ]);

  // React.useEffect(() => {
  //   let orig = !tuple || !tuple.data ? [] : filterInventory(tuple.data.dealership.vehicles);
  //   setInitialData(orig);
  // }, [ initialData ])

  const inventories = React.useMemo(() => {
    if ( !tuple || !tuple.data ) {
      return [];
    } else {
      let orig = !tuple || !tuple.data ? [] : tuple.data.dealership.vehicles
      // setInitialData(orig)
      return filterInventory(orig);
    }
  }, [ tuple, filterInventory ]);

  const dealership = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;
    return tuple.data?.dealership;
  }, [ tuple ]);

  const uniqueVehicleTypes = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;

    const allInventoryType: VehicleType = {
      id: 'all',
      displayName: 'All Inventory',
      name: 'all'
    }

    const allVehiclesTypes = _.uniqWith(
      tuple.data?.dealership.vehicles, _.isEqual)
      .map(vehicle => vehicle.type);
      
    const uniqueVehicleTypes = _.uniqWith(allVehiclesTypes, _.isEqual);
    uniqueVehicleTypes.unshift(allInventoryType);

    return uniqueVehicleTypes;
  }, [ tuple ]);

  const handleSearchName = React.useCallback((e) => {
    let searchKey = e.currentTarget.value;
    console.log(searchKey)
    // keyCode 50 is enter
    if ( e.keyCode === 13 ) {
      // pass in the value into filterInventory

      // TODO issue:
      // when on search, it runs against an emptry inventories array
      // due to the tuple data being undefined 
      filterInventory(tuple.data?.dealership.vehicles, searchKey)

    }
  }, [ tuple ])

  return {
    inventories,
    dealership,
    uniqueVehicleTypes,
    handleSearchName,
  };
}



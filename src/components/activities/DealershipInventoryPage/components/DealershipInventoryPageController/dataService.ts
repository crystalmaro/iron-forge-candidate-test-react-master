
import * as React from 'react';
import _, { filter } from 'lodash';
// GraphQL
import {
  Dealership,
  useDealershipInventoryPageControllerQuery as useBaseQuery,
  VehicleType,
} from 'generated/graphql';

import { dealershipId } from '../../DealershipInventoryPage';
import { isConstructorDeclaration } from 'typescript';
// const dealershipId = '3781905c-5402-44f7-9e3b-972adbea9855';

interface Props {
  selectedVehicleType: string;
  searchKey: string;
}

// interface DealershipData {
//   data: {
//     dealership: Dealership;
//   }
// }

export const useDealershipInventoryPageControllerQuery = (
  { selectedVehicleType, searchKey }: Props
) => {
  const [initialData, setInitialData] = React.useState([])

  const tuple = useBaseQuery({
    // TODO get params from useParams React Router
      variables: { id: dealershipId },
    }
  );
  console.log('tuple', tuple)

  const filterInventory = React.useCallback((invt, searchKey = '') => {
    setInitialData(invt);

    let searchResults = searchKey === '' ? invt : _.filter(invt, { name: searchKey }) 

    if ( selectedVehicleType === 'all' ) {
      return searchResults
    } else {
      return _.filter(searchResults, {type: {name: selectedVehicleType}})
    }
  }, [ selectedVehicleType ]);

  React.useEffect(() => {
    let originalData = !tuple || !tuple.data ? [] : filterInventory(tuple.data.dealership.vehicles);
    setInitialData(originalData)
  }, [])
  
  // TODO: rename it to inventoryfilterInventory(tuple.data.dealership.vehicles);
  // const getInventory = () => {
  //   debugger
  //   let inventories = !tuple || !tuple.data ? [] : filterInventory(tuple.data.dealership.vehicles);
  //   return inventories
  // }

  // might be better to call fetchInventories
  const inventories = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return [];
    else return filterInventory(tuple.data.dealership.vehicles);
  }, [ tuple, filterInventory ]);

  const dealership = React.useMemo(() => {
    if ( !tuple || !tuple.data ) return;
    return tuple.data?.dealership;
  }, [ tuple ]);

  // TODO: rename it to vehicleClass
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
    // const inventories = tuple.data ? tuple.data.dealership.vehicles : []

    let searchKey = e.currentTarget.value;
    console.log(searchKey)
    // keyCode 50 is enter
    if ( e.keyCode === 13 ) {
      // pass in the value into filterInventory

      filterInventory(initialData, searchKey)

    }
  }, [])

  return {
    inventories,
    dealership,
    uniqueVehicleTypes,
    handleSearchName
  };
}


// issue:
// when on search, it runs against an emptry inventories array
// due to the tuple data being undefined 
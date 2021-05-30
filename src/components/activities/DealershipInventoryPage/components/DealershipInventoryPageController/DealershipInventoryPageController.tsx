import { Vehicle } from 'generated/graphql';
import * as React from 'react';
import DealershipInventoryHeader from '../DealershipInventoryHeader';
import * as dataService from './dataService';

interface Props {
  children: ({inventories: []}) => React.ReactElement;
}

const DealershipInventoryPageController:React.FC<Props> = ({children}) => {
  const [selectedVehicleType, setSelectedVehicleType] = React.useState<string>('all');
  const [searchKey, setSearchKey] = React.useState<string>('');
  
  const {
    inventories,
    dealership,
    uniqueVehicleTypes,
    handleSearchName,
    // handleSearchChange
  } = dataService.useDealershipInventoryPageControllerQuery({ selectedVehicleType, searchKey });

  return<div>
    <DealershipInventoryHeader
      handleSearchName={handleSearchName}
      onSearch={setSearchKey}
      handleTypeChange={setSelectedVehicleType}
      dealership={dealership}
      uniqueVehicleTypes={uniqueVehicleTypes}>
    </DealershipInventoryHeader>
    {children({ inventories })}
  </div>
}

export default DealershipInventoryPageController;
import * as React from 'react';
import * as dataService from './dataService';
import DealershipInventoryHeader from '../DealershipInventoryHeader';

interface Props {
  children: ({inventoryList: []}) => React.ReactElement;
}

const DealershipInventoryPageController:React.FC<Props> = ({children}) => {
  const [selectedVehicleType, setSelectedVehicleType] = React.useState<string>('all');
  const [searchKey, setSearchKey] = React.useState<string>('');
  
  const {
    inventoryList,
    dealership,
    vehicleTypeList,
  } = dataService.useDealershipInventoryPageControllerQuery({ selectedVehicleType, searchKey });

  return<div>
    <DealershipInventoryHeader
      handleNameSearch={setSearchKey}
      handleTypeChange={setSelectedVehicleType}
      dealership={dealership}
      vehicleTypeList={vehicleTypeList}>
    </DealershipInventoryHeader>
    {children({ inventoryList })}
  </div>
}

export default DealershipInventoryPageController;

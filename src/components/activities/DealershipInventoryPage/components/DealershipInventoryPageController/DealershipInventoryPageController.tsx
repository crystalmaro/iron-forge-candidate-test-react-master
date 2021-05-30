import * as React from 'react';
import DealershipInventoryHeader from '../DealershipInventoryHeader';
// import DealershipInventoryList from './DealershipInventoryList';
import DealershipInventoryFooter from '../DealershipInventoryFooter';

import * as dataService from './dataService';

interface Props {
  children: ({inventories: []}) => React.ReactElement
}



const DealershipInventoryPageController:React.FC<Props> = ({children}) => {
  // const [type, setTypes] = useState("all")
  // const [searchItem, setSearchItem] = useState("")
  // const { products } = useGetProdcuts({ type, searchItem}
  

  const [type, setType] = React.useState<string>('all');
  const [searchStr, setSearchStr] = React.useState<string>("")
  

  const {inventories, dealerships} = dataService.useDealershipInventoryPageControllerQuery({ type, searchStr });

  return<div>
    <DealershipInventoryHeader handleTypeChange={setType} dealerships={dealerships}>
      {/* <div>banner</div> */}
      {/* <Search value={searchItem} onChange={setSearchItem}/>
      <Filter value={type} onChange={setType}/> */}
    </DealershipInventoryHeader>
    {children({ inventories })}
  </div>
}

export default DealershipInventoryPageController;
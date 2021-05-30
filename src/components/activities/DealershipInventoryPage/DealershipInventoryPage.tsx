import * as React from 'react';
import _ from 'lodash';
// Components
import DealershipInventoryHeader from './components/DealershipInventoryHeader';
import DealershipInventoryList from './components/DealershipInventoryList';
import DealershipInventoryFooter from './components/DealershipInventoryFooter';

import DealershipInventoryPageController from './components/DealershipInventoryPageController';
// Styles
const styles = require('./DealershipInventoryPage.module.css');

// export const dealershipId = '3781905c-5402-44f7-9e3b-972adbea9855';
export const dealershipId = 'a7fef0da-0e90-4e96-982d-f2340be94b97';
 
const DealershipInventoryPage: React.FC = () => {

  // const [type, setType] = React.useState<string>('all');
  // const handleTypeChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
  //   let { value } = e.currentTarget;
  //   setType(value);
  //   console.log(value)
  // }, [])

  return (
    <div className={styles.container}>
      <DealershipInventoryPageController>
        {({inventories})=> {
          return <DealershipInventoryList inventories={inventories}/>
        }}
      </DealershipInventoryPageController>
      <DealershipInventoryFooter />
    </div>
  );
};

export default DealershipInventoryPage;

import * as React from 'react';
// Components
import DealershipInventoryActivityController from './components/DealershipInventoryActivityController/';
import DealershipInventoryList from './components/DealershipInventoryList';
import DealershipInventoryFooter from './components/DealershipInventoryFooter/';
// Styles
const styles = require('./DealershipInventoryActivity.module.css');

const DealershipInventoryActivity: React.FC = () => (

  <div className={ styles.container }>

    <DealershipInventoryActivityController>
      {({ inventoryList }) => {
        return <DealershipInventoryList inventoryList={ inventoryList } />
      }}
    </DealershipInventoryActivityController>

    <DealershipInventoryFooter />
  </div>
);

export default DealershipInventoryActivity;

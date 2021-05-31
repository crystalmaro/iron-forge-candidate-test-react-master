import * as React from 'react';
// Components
import DealershipInventoryPageController from './components/DealershipInventoryPageController';
import DealershipInventoryList from './components/DealershipInventoryList';
import DealershipInventoryFooter from './components/DealershipInventoryFooter';
// Styles
const styles = require('./DealershipInventoryPage.module.css');

const DealershipInventoryPage: React.FC = () => (
  <div className={styles.container}>
    <DealershipInventoryPageController>
      {({inventoryList})=> {
        return <DealershipInventoryList inventoryList={inventoryList} />
      }}
    </DealershipInventoryPageController>
    <DealershipInventoryFooter />
  </div>
);

export default DealershipInventoryPage;

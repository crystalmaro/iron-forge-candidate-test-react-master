import * as React from 'react';
import _ from 'lodash';

// import * as dataService from './dataService';
import { DealershipInventoryHeader } from '../DealershipInventoryHeader/DealershipInventoryHeader';
import { DealershipInventoryList } from '../DealershipInventoryList/DealershipInventoryList';
import { DealershipInventoryFooter } from '../DealershipInventoryFooter/DealershipInventoryFooter';

const styles = require('./DealershipInventoryPage.module.css');



export const DealershipInventoryPage: React.FC = () => {
  // const queryTuple = dataService.useDealershipInventoryActivityQuery();



  return (
    <div className={styles.container}>
      <DealershipInventoryHeader />
      <DealershipInventoryList />
      <DealershipInventoryFooter />
    </div>
  );
};

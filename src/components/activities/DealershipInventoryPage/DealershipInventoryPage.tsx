import * as React from 'react';
import _ from 'lodash';

// import * as dataService from './dataService';
// Components
import DealershipInventoryHeader from '../DealershipInventoryHeader/DealershipInventoryHeader';
import DealershipInventoryList from '../DealershipInventoryList/DealershipInventoryList';
import { DealershipInventoryFooter } from '../DealershipInventoryFooter/DealershipInventoryFooter';
// Styles
const styles = require('./DealershipInventoryPage.module.css');
 
const DealershipInventoryPage = () => {
  const [id, setId] = React.useState<String>('a7fef0da-0e90-4e96-982d-f2340be94b97')
  const [type, setType] = React.useState<String>('all');
  const handleTypeChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.currentTarget;
    setType(value);
    console.log(value)
  }, [])

  return (
    <div className={styles.container}>
      <DealershipInventoryHeader handleTypeChange={handleTypeChange} />
      <DealershipInventoryList />
      <DealershipInventoryFooter />
    </div>
  );
};

export default DealershipInventoryPage;

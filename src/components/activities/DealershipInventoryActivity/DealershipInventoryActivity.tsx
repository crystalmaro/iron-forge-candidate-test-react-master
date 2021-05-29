import * as React from 'react';
import _ from 'lodash';

import * as dataService from './dataService';

const styles = require('./DealershipInventoryActivity.module.css');



export const DealershipInventoryActivity: React.FC = props => {
  const queryTuple = dataService.useDealershipInventoryActivityQuery();
  console.log('12 DealershipInventoryActivity')
  console.log(queryTuple)


  return (
    <div className={styles.container}>
      Dealership Inventory Activity

      {!queryTuple.loading &&
        _.map(queryTuple.data.dealerships, dealership => (
          <div className={styles.dealership}>
            {dealership.name} [{dealership.id}]
          </div>
        ))}
    </div>
  );
};

import * as React from 'react';
import _ from 'lodash';
// GraphQL
import * as dataService from './dataService';
// Styles
const styles = require('./DealershipInventoryList.module.css');

const DealershipInventoryList: React.FC = (props) => {
  const queryTuple = dataService.useDealershipInventoryListQuery();
  const data = queryTuple.data?.dealership.vehicles;

  return (
    <div className={styles.container}>

      {!queryTuple.loading &&
        _.map(data, each => (
          <section
            key={each.id}
            className={styles.DealershipInventoryList__card}>
            <div className={styles.DealershipInventoryList__image}>
              <img src={each.imageUrl} />
            </div>

            <div className={styles.DealershipInventoryList__info}>
              <div className={styles.DealershipInventoryList__priceBox}>
                <span className={styles.DealershipInventoryList__priceTag}>
                  ${(each.priceCentsPerDay / 100).toFixed(2)}
                </span>
                <span className={styles.DealershipInventoryList__priceDay}>
                  /day
                </span>
              </div>
              <div className={styles.DealershipInventoryList__type}>
                {(each.type.displayName).toUpperCase()}
              </div>
              <div className={styles.DealershipInventoryList__name}>
                {each.name}
              </div>
              <div className={styles.DealershipInventoryList__address}>
                {each.address}
              </div>
            </div>
          </section>
        ))
      }

    </div>
  );
};

export default DealershipInventoryList;
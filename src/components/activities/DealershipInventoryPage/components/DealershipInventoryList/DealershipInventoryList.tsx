import * as React from 'react';
import _ from 'lodash';
import { Vehicle } from 'generated/graphql';
// Styles
const styles = require('./DealershipInventoryList.module.css');

interface Props {
  inventoryList: Vehicle[];
}

const DealershipInventoryList: React.FC<Props> = ({ inventoryList }) => (

  <div className={styles.container}>

    {_.map(inventoryList, each => (
      <section
        key={each.id}
        className={styles.card}>
        <div className={styles.vehicleImage}>
          <img src={each.imageUrl} alt={each.name} />
        </div>

        <div className={styles.info}>
          <div className={styles.priceBox}>
            <span className={styles.priceTag}>
              ${(each.priceCentsPerDay / 100).toFixed(2)}
            </span>
            <span className={styles.priceDay}>
              /day
            </span>
          </div>
          <div className={styles.type}>
            {(each.type.displayName).toUpperCase()}
          </div>
          <div className={styles.name}>
            {each.name}
          </div>
          <div className={styles.address}>
            {each.address}
          </div>
        </div>
      </section>
    ))}

  </div>
);

export default DealershipInventoryList;

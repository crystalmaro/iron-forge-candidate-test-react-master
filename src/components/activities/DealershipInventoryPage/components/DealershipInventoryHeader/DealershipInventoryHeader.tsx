import * as React from 'react';
import _ from 'lodash';
import { VehicleType } from 'generated/graphql';
// Styles
import searchIcon from '../../../../../images/search.svg';
const styles = require('./DealershipInventoryHeader.module.css');

interface Dealership {
  id: string;
  name: string;
  address: string;
  logoUrl: string;
}

interface OwnProps {
  handleNameSearch: (arg0: string) => void;
  handleTypeChange: (arg0: string) => void;
  dealership?: Dealership;
  vehicleTypeList?: VehicleType[];
}

const DealershipInventoryHeader: React.FC<OwnProps> = ({
  handleNameSearch,
  handleTypeChange,
  dealership,
  vehicleTypeList
}) => (

  <div>
    <section className={styles.banner} />

    <section className={styles.header}>
      <div className={styles.logo}
        style={{backgroundImage: `url('${dealership?.logoUrl}')`}} />
      <div className={styles.info}>
        <div className={styles.name}>
          {dealership?.name}
        </div>
        <div className={styles.address}>
          {dealership?.address}
        </div>
      </div>
    </section>

    <section className={styles.action}>
      <div className={styles.searchWrapper}>
        <img
          src={searchIcon}
          className={styles.searchIcon}
          alt={dealership?.name}/>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameSearch(e.currentTarget.value)}
          type='text'
          className={styles.searchBox}
          placeholder='Search by name…' />
      </div>
      <div className={styles.divider} />

      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleTypeChange(e.currentTarget.value)}
        className={styles.dropdownSelect}>

        {_.map(vehicleTypeList, type => (
            <option
              key={type.name}
              value={type.name}>
                {type.displayName}
            </option>
          ))
        }

      </select>
    </section>
  </div>
);

export default DealershipInventoryHeader;

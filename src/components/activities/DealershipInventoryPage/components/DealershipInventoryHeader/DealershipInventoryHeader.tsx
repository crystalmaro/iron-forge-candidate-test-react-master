import * as React from 'react';
import _ from 'lodash';
// GraphQL & Types
import {
  // Dealership,
  VehicleType
} from 'generated/graphql';
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
  handleSearchName: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  // setSearchValue: (arg0: string) => void;
  handleTypeChange: (arg0: string) => void;
  dealership?: Dealership;
  uniqueVehicleTypes?: VehicleType[];
}

const DealershipInventoryHeader: React.FC<OwnProps> = ({
  handleSearchName,
  // setSearchValue,
  handleTypeChange,
  dealership,
  uniqueVehicleTypes
}) => {
  
  return (
    <div>
      <section className={styles.DealershipInventoryHeader__banner} />

      <section className={styles.DealershipInventoryHeader__header}>
        <div className={styles.DealershipInventoryHeader__logo}
          style={{backgroundImage: `url('${dealership?.logoUrl}')`}} />
        <div className={styles.DealershipInventoryHeader__info}>
          <div className={styles.DealershipInventoryHeader__name}>
            {dealership?.name}
          </div>
          <div className={styles.DealershipInventoryHeader__address}>
            {dealership?.address}
          </div>
        </div>
      </section>
      
      <section className={styles.DealershipInventoryHeader__action}>
        <div className={styles.DealershipInventoryHeader__searchWrapper}>
          <img
            src={searchIcon}
            className={styles.DealershipInventoryHeader__searchIcon}
            alt={dealership?.name}/>
          <input
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleSearchName(e)}
            type='text'
            className={styles.DealershipInventoryHeader__searchBox}
            placeholder='Search by name…' />
        </div>
        <div className={styles.DealershipInventoryHeader__divider} />

        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleTypeChange(e.currentTarget.value)}
          className={styles.DealershipInventoryHeader__dropdownSelect}>

          {_.map(uniqueVehicleTypes, type => (
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
};

export default DealershipInventoryHeader;
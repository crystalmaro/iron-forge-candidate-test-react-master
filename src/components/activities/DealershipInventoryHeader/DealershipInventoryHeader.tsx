import * as React from 'react';
import _ from 'lodash';
// GraphQL
import * as dataService from './dataService';
// Styles
import searchIcon from '../../../images/search.svg';
const styles = require('./DealershipInventoryHeader.module.css');
export interface OwnProps {
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// interface Props extends OwnProps {
//   data: LaunchListQuery;
// }

// const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (

const DealershipInventoryHeader: React.FC<OwnProps> = (props) => {
  const queryTuple = dataService.useDealershipInventoryHeaderQuery();
  const data = queryTuple.data?.dealership;
  const { handleTypeChange } = props;

  return (
    <div className={styles.DealershipInventoryHeader__container}>
      <section className={styles.DealershipInventoryHeader__banner} />

      <section className={styles.DealershipInventoryHeader__header}>
        <div className={styles.DealershipInventoryHeader__logo}
          style={{backgroundImage: `url('${data?.logoUrl}')`}} />
        <div className={styles.DealershipInventoryHeader__info}>
          <div className={styles.DealershipInventoryHeader__name}>
            {data?.name}
          </div>
          <div className={styles.DealershipInventoryHeader__address}>
            {data?.address}
          </div>
        </div>
      </section>
      
      <section className={styles.DealershipInventoryHeader__action}>
        <div className={styles.DealershipInventoryHeader__searchWrapper}>
          <img src={searchIcon} className={styles.DealershipInventoryHeader__searchIcon} />
          <input type='text' className={styles.DealershipInventoryHeader__searchBox} placeholder='Search by name…' />
        </div>
        <div className={styles.DealershipInventoryHeader__divider} />

        <select name='' id=''
          onChange={handleTypeChange}
          className={styles.DealershipInventoryHeader__dropdownSelect}>

          {!queryTuple.loading &&
            _.map(queryTuple.uniqueVehicleTypes, type => (
              <option
                key={type.name}
                className={styles.DealershipInventoryHeader__dropdownOption}
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
import * as React from 'react';
import _ from 'lodash';
// GraphQL
import * as dataService from './dataService';
// Styles
import searchIcon from '../../../../../images/search.svg';
// import DealershipInventoryBanner from 'src/images/DealershipInventoryBanner.jpg'
// import DealershipInventoryBanner from 'src/images/DealershipInventoryBanner.jpg'
import rectangle from '../../../../../images/rectangle.svg'
const styles = require('./DealershipInventoryHeader.module.css');


interface Dealership {
  id: string;
  name: string;
  address: string;
  logoUrl: string;
}
interface OwnProps {
  handleTypeChange: (arg0: string) => void;
  dealerships: Dealership
}

// interface Props extends OwnProps {
//   data: LaunchListQuery;
// }

// const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (

const DealershipInventoryHeader: React.FC<OwnProps> = ({handleTypeChange, dealerships}) => {
  const queryTuple = dataService.useDealershipInventoryHeaderQuery();
  const data = queryTuple.data?.dealership;
  
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
          <img src={searchIcon} className={styles.DealershipInventoryHeader__searchIcon} alt={data?.name}/>
          <input type='text' className={styles.DealershipInventoryHeader__searchBox} placeholder='Search by name…' />
        </div>
        <div className={styles.DealershipInventoryHeader__divider} />

        <select name='' id=''
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleTypeChange(e.currentTarget.value)}
          className={styles.DealershipInventoryHeader__dropdownSelect}
          style={{backgroundImage: rectangle}}
          >

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
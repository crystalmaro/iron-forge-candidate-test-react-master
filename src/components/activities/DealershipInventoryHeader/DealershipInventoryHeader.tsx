import * as React from 'react';
import _ from 'lodash';
import searchIcon from '../../../images/search.svg'

// import * as dataService from './dataService';

const styles = require('./DealershipInventoryHeader.module.css');
const logoImg = 'https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/dealershipLogos/guruLogo.png'

export const DealershipInventoryHeader: React.FC = () => {
  // const queryTuple = dataService.useDealershipInventoryActivityQuery();



  return (
    <div className={styles.DealershipInventoryHeader__container}>
      <section className={styles.DealershipInventoryHeader__banner} />
      <section className={styles.DealershipInventoryHeader__header}>
        <div className={styles.DealershipInventoryHeader__logo} style={{backgroundImage: `url('${logoImg}')`}} />
        <div className={styles.DealershipInventoryHeader__info}>
          <div className={styles.DealershipInventoryHeader__name}>Guru Recreations</div>
          <div className={styles.DealershipInventoryHeader__address}>123 W. Main St. San Diego, CA 92122</div>
        </div>
      </section>
      <section className={styles.DealershipInventoryHeader__action}>
        <div className={styles.DealershipInventoryHeader__searchWrapper}>
          <img src={searchIcon} className={styles.DealershipInventoryHeader__searchIcon} />
          <input type='text' className={styles.DealershipInventoryHeader__searchBox} placeholder='Search by name…' />
        </div>
        <div className={styles.DealershipInventoryHeader__divider} />
        <select name='' id='' className={styles.DealershipInventoryHeader__dropdownSelect}>
          <option className={styles.DealershipInventoryHeader__dropdownOption} value='all-inventory'>All Inventory</option>
          <option className={styles.DealershipInventoryHeader__dropdownOption} value='jetSki'>Jet Ski</option>
          <option className={styles.DealershipInventoryHeader__dropdownOption} value='atv'>All-terrain vehicle</option>
        </select>
      </section>
    </div>
  );
};

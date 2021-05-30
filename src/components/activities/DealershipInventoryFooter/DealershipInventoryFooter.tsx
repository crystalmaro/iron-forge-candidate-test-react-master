import * as React from 'react';
// Styles
import appStoreLogo from '../../../images/logo__app-store.jpg';
import rrLogo from '../../../images/logo__rr.jpg';
import googleLogo from '../../../images/logo__google.jpg';

// import * as dataService from './dataService';

const styles = require('./DealershipInventoryFooter.module.css');

export const DealershipInventoryFooter: React.FC = () => {
  // const queryTuple = dataService.useDealershipInventoryActivityQuery();

  return (
    <div className={styles.container}>
      <section className={styles.DealershipInventoryFooter__top}>
        <img src={appStoreLogo} className={styles.DealershipInventoryFooter__appStoreIcon} alt='img' />
      </section>
      <section className={styles.DealershipInventoryFooter__bottom}>
        <div className={styles.DealershipInventoryFooter__bottomItem}>
          <img src={rrLogo} className={styles.DealershipInventoryFooter__logo} alt='img' />
          <div>Powered by Recreation Rentalz</div>
        </div>
        <div className={styles.DealershipInventoryFooter__bottomItem}>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
        </div>
        <div className={styles.DealershipInventoryFooter__bottomItem}>
          <div>Maps powered by</div>
          <img src={googleLogo} className={styles.DealershipInventoryFooter__logo} alt='img' />
        </div>
      </section>
    </div>
  );
};

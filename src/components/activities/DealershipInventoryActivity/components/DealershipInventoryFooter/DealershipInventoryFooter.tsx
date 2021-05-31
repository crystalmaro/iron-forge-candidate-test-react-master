import * as React from 'react';
// Styles
import appStoreLogo from '../../../../../images/logo__app-store.jpg';
import rrLogo from '../../../../../images/logo__rr.jpg';
import googleLogo from '../../../../../images/logo__google.jpg';

const styles = require('./DealershipInventoryFooter.module.css');

const DealershipInventoryFooter: React.FC = () => (

  <div className={styles.container}>
    <section className={styles.top}>
      <img
        src={appStoreLogo}
        className={styles.appStoreIcon}
        alt='img' />
    </section>
    <section className={styles.bottom}>
      <div className={styles.bottomItem}>
        <img 
          src={rrLogo}
          className={styles.logo}
          alt='img' />
        <div>
          Powered by Recreation Rentalz
        </div>
      </div>
      <div className={styles.bottomItem}>
        <div>
          Terms of Use
        </div>
        <div>
          Privacy Policy
        </div>
      </div>
      <div className={styles.bottomItem}>
        <div>
          Maps powered by
        </div>
        <img src={googleLogo}
          className={styles.logo}
          alt='img' />
      </div>
    </section>
  </div>
);

export default DealershipInventoryFooter;

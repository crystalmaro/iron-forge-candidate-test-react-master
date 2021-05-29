import * as React from 'react';
import _ from 'lodash';

// import * as dataService from './dataService';

const styles = require('./DealershipInventoryList.module.css');

const vehicleImage = 'https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/vehicleImages/jetSki1.jpg';


export const DealershipInventoryList: React.FC = () => {
  // const queryTuple = dataService.useDealershipInventoryActivityQuery();



  return (
    <div className={styles.container}>
      <section className={styles.DealershipInventoryList__card}>
        <div className={styles.DealershipInventoryList__image} >
          <img src={vehicleImage} />
        </div>
        <div className={styles.DealershipInventoryList__info}>
          <div className={styles.DealershipInventoryList__priceBox}>
            <span className={styles.DealershipInventoryList__priceTag}>$999</span>
            <span className={styles.DealershipInventoryList__priceDay}>/day</span>
          </div>
          <div className={styles.DealershipInventoryList__type}>JET SKIS</div>
          <div className={styles.DealershipInventoryList__name}>2012 Hyundai Explore JL89</div>
          <div className={styles.DealershipInventoryList__address}>89 S. Main, San Diego, CA 92122</div>
        </div>
      </section>
      <section className={styles.DealershipInventoryList__card}>
        <div className={styles.DealershipInventoryList__image} >
          <img src={vehicleImage} />
        </div>
        <div className={styles.DealershipInventoryList__info}>
          <div className={styles.DealershipInventoryList__priceBox}>
            <span className={styles.DealershipInventoryList__priceTag}>$999</span>
            <span className={styles.DealershipInventoryList__priceDay}>/day</span>
          </div>
          <div className={styles.DealershipInventoryList__type}>JET SKIS</div>
          <div className={styles.DealershipInventoryList__name}>2012 Hyundai Explore JL89</div>
          <div className={styles.DealershipInventoryList__address}>89 S. Main, San Diego, CA 92122</div>
        </div>
      </section>
      <section className={styles.DealershipInventoryList__card}>
        <div className={styles.DealershipInventoryList__image} >
          <img src={vehicleImage} />
        </div>
        <div className={styles.DealershipInventoryList__info}>
          <div className={styles.DealershipInventoryList__priceBox}>
            <span className={styles.DealershipInventoryList__priceTag}>$999</span>
            <span className={styles.DealershipInventoryList__priceDay}>/day</span>
          </div>
          <div className={styles.DealershipInventoryList__type}>JET SKIS</div>
          <div className={styles.DealershipInventoryList__name}>2012 Hyundai Explore JL89</div>
          <div className={styles.DealershipInventoryList__address}>89 S. Main, San Diego, CA 92122</div>
        </div>
      </section>
      <section className={styles.DealershipInventoryList__card}>
        <div className={styles.DealershipInventoryList__image} >
          <img src={vehicleImage} />
        </div>
        <div className={styles.DealershipInventoryList__info}>
          <div className={styles.DealershipInventoryList__priceBox}>
            <span className={styles.DealershipInventoryList__priceTag}>$999</span>
            <span className={styles.DealershipInventoryList__priceDay}>/day</span>
          </div>
          <div className={styles.DealershipInventoryList__type}>JET SKIS</div>
          <div className={styles.DealershipInventoryList__name}>2012 Hyundai Explore JL89</div>
          <div className={styles.DealershipInventoryList__address}>89 S. Main, San Diego, CA 92122</div>
        </div>
      </section>
    </div>
  );
};

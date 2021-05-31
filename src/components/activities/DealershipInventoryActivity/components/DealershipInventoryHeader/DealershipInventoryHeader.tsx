import * as React from 'react';
import _ from 'lodash';
import { VehicleType } from 'generated/graphql';
import { IDealership } from '../DealershipInventoryActivityController/dataService';
import DealershipInventorySearch from './DealershipInventorySearch';
import DealershipInventoryFilter from './DealershipInventoryFilter';
// Styles
const styles = require('./DealershipInventoryHeader.module.css');

interface OwnProps {
  handleNameSearch: ( arg0: string ) => void;
  handleTypeChange: ( arg0: string ) => void;
  dealership?: IDealership;
  vehicleTypeList?: VehicleType[];
}

const DealershipInventoryHeader: React.FC<OwnProps> = ({
  handleNameSearch,
  handleTypeChange,
  dealership,
  vehicleTypeList
}) => (

  <>
    <section className={ styles.banner } />
    <section className={ styles.header }>
      <div
        className={ styles.logo }
        style={{backgroundImage: `url('${dealership?.logoUrl}')`}} />
      <div className={ styles.info }>
        <div className={ styles.name }>
          {dealership?.name}
        </div>
        <div className={ styles.address }>
          {dealership?.address}
        </div>
      </div>
    </section>
    <section className={ styles.action }>
      <DealershipInventorySearch handleNameSearch={ handleNameSearch } />
      <div className={ styles.divider } />
      <DealershipInventoryFilter
        handleTypeChange={ handleTypeChange }
        vehicleTypeList={ vehicleTypeList }/>
    </section>
  </>
);

export default DealershipInventoryHeader;

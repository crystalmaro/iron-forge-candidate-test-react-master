import * as React from 'react';
import _ from 'lodash';
import { VehicleType } from 'generated/graphql';
// Styles
const styles = require('./DealershipInventoryFilter.module.css');

interface OwnProps {
  handleTypeChange: ( arg0: string ) => void;
  vehicleTypeList?: VehicleType[];
}

const DealershipInventoryFilter: React.FC<OwnProps> = ({
  handleTypeChange,
  vehicleTypeList
}) => (

  <select
    onChange={( e: React.ChangeEvent<HTMLSelectElement> ) => handleTypeChange( e.currentTarget.value )}
    className={ styles.dropdownSelect }>

    {_.map( vehicleTypeList, type => (
        <option
          key={ type.name }
          value={ type.name }>
            { type.displayName }
        </option>
      ))
    }

  </select>
);

export default DealershipInventoryFilter;

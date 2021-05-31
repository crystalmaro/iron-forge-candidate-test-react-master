import * as React from 'react';
// Styles
import searchIcon from '../../../../../../images/search.svg';
const styles = require('./DealershipInventorySearch.module.css');

interface OwnProps {
  handleNameSearch: ( arg0: string ) => void;
}

const DealershipInventorySearch: React.FC<OwnProps> = ({
  handleNameSearch,
}) => (

  <section className={ styles.action }>
    <div className={ styles.searchWrapper }>
      <img
        src={searchIcon}
        className={ styles.searchIcon }
        alt='search-icon' />
      <input
        onChange={( e: React.ChangeEvent<HTMLInputElement> ) => handleNameSearch( e.currentTarget.value )}
        type='text'
        className={ styles.searchBox }
        placeholder='Search by name…' />
    </div>
    <div className={ styles.divider } />
  </section>
);

export default DealershipInventorySearch;

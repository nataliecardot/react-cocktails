import React from 'react';
import { useGlobalContext } from '../context';

// this is uncontrolled component (see https://stackoverflow.com/a/42522792/8888320)
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;

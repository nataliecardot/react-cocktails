import React from 'react';
import { useGlobalContext } from '../context';

// this is uncontrolled component (see https://stackoverflow.com/a/42522792/8888320)
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // corresponds to ref defined on input element
  const searchValue = React.useRef('');

  // removed because can just use autoFocus attribute instead
  // React.useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    // prevent app refresh when user hits enter
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search for your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            autoFocus
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

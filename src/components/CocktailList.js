import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);

  if (loading) return <Loading />;

  // cocktails array empty
  if (!cocktails.length) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;

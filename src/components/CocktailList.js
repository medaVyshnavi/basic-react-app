import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  
  const{cocktails,load}= useGlobalContext();
  // console.log(cocktails);
  if(load){
    return <Loading/>
  }
  if(cocktails.length < 1){
    return <h2 className="section-title">Couldnt find Results</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">
        Cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(items =>{
          return <Cocktail key={items.id} {...items}/>
        })}

      </div>
    </section>
  )
}

export default CocktailList

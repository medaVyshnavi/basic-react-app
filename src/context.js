import React, { useState, useContext} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[load,setLoad] =useState(false);
  const[search,setSearch] =useState('a')
  const[cocktails,setCocktails]= useState([])

  const fetchData= async ()=>{
    setLoad(true)

    try{

      const response=await fetch(`${url}${search}`)
      const data=await response.json()
      // console.log(data);
      const {drinks} = data;
      
      if(drinks){
        const newDrink= drinks.map((item)=>{
          const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}= item;
          return {id:idDrink,name:strDrink,img:strDrinkThumb,info:strAlcoholic,glass:strGlass}
        })
        setCocktails(newDrink)
      }
      else{
        setCocktails([]);
      }
      setLoad(false);
    }
    catch(error){
      console.log(error)
      setLoad(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[search])

  return ( 
  
      <AppContext.Provider value={{load,search,cocktails,setSearch}}>
        {children}
      </AppContext.Provider>
  )}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

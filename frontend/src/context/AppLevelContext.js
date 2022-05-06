import { createContext, useState,useEffect } from 'react'
import React from 'react'
import { categories } from '../data'
import axios from 'axios'

const AppLevelContext = createContext()

export const AppLevelProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(categories)



  const testCall = async () => {
    const headers = {
      'Content-Type': 'application/json',
    }

    const response = await axios.get('/menu', { headers })
    console.log(response.data.menu)
  }

  useEffect(() => {
    testCall()
  },[]);



  return (
    <AppLevelContext.Provider
      value={{
        menuList,
        setMenuList,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  )
}

export default AppLevelContext

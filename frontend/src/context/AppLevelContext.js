import { createContext, useState } from 'react'
import React from 'react'
import { categories } from '../data'

const AppLevelContext = createContext()

export const AppLevelProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(/*categories*/ [])
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

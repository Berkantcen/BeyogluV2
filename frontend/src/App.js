import { useState, useLayoutEffect, useContext } from 'react'
import './App.css'
import Breakfast from './components/Breakfast'
import CategoryList from './components/CategoryList'

// COMPONENTS
import Header from './components/Header'
import Landing from './components/Landing'

import AppLevelContext from './context/AppLevelContext'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'


function PageLoading(){
  return(
    <div>
      Loading...
    </div>
  )
}



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { menuList, setMenuList } = useContext(AppLevelContext)
  function getCategories(){
    axios.get("/api/category").then((req) =>{
      const data = req?.data
      if (data){
        setMenuList(data || [])
      }
    }).catch((err)=>{
      console.log(err)
    }).then(()=>{
      setIsLoading(setIsLoading(false))
    })
  }

  useLayoutEffect(()=>{
    if(isLoading){getCategories()}
  }, [])

  return isLoading ? <PageLoading/> : (
    <>
      <Header />
      <div className='container'>
        <Landing />
        <Breakfast />
        <CategoryList />
      </div>
    </>
  )
}

export default App

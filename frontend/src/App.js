import './App.css'
import Breakfast from './components/Breakfast'
import CategoryList from './components/CategoryList'

// COMPONENTS
import Header from './components/Header'
import Landing from './components/Landing'

function App() {
  return (
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

import './App.css'
import Header from './components/Header'
import Navagation from './components/Navagation'
import GroupList from './components/GroupList'
import Footer from './components/Footer'

import Groups from './data/data'

function App() {

  return (
    <>
      <Header />
      <div className='search-form'>
        <Navagation />
      </div>
      <GroupList groups={Groups} />
      <Footer />
    </>
  )
}

export default App

import './HomePage.css'
import Header from '../components/Header'
import Navagation from '../components/Navagation'
import HomeDetails from '../components/HomeDetails'
import GroupList from '../components/GroupList'
import Footer from '../components/Footer'

import Groups from '../data/data'

function HomePage() {

  return (
    <main>
      <Header />
      <div className='search-form'>
        <Navagation />
      </div>
      <div className='home-content'>
        <HomeDetails />
        <GroupList groups={Groups} />
      </div>
      <Footer />
    </main>
  )
}

export default HomePage

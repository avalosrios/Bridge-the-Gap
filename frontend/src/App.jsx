import './App.css'
import Header from './components/Header'
import Navagation from './components/Navagation'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='search-form'>
        <Navagation />
      </div>
      <Footer />
    </>
  )
}

export default App

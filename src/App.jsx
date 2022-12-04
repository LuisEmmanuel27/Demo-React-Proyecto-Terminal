import './App.css'
import Banner from './components/Banner/Banner'
import Conocenos from './components/Conocenos/Conocenos'
import Cursos from './components/Cursos/Cursos'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Mascotas from './components/Mascotas/Mascotas'

function App() {

  return (
    <div className="main-app">
      <Header />
      <Banner />
      <Mascotas />
      <Cursos />
      <Conocenos />
      <Footer />
    </div>
  )
}

export default App

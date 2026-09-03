import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Esprit from './components/Esprit'
import Menu from './components/Menu'
import Galerie from './components/Galerie'
import AvisGoogle from './components/AvisGoogle'
import GoogleMap from './components/GoogleMap'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Esprit />
        <Menu />
        <Galerie />
        <AvisGoogle />
        <GoogleMap />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import BookingSteps from './components/BookingSteps'
import Sponsors from './components/Sponsors'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Sponsors />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App

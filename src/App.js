import './App.css'
import Hero from './Components/Hero'
import Footer from './Components/Footer/Footer'
import Collection from './Components/Collection'
import Forms from '../src/Components/Wallpaper/Forms'
import About from '../src/Components/About'
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Collection />
      <Footer />
      <Forms />
    </div>
  )
}

export default App

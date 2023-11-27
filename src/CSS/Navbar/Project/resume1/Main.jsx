import './Main.css'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navbar from "./Navbar"
import Skill from './Skill'


const main = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Footer />
    </div>
  )
}

export default main
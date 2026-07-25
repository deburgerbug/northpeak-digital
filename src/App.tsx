import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Results from './components/Results'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(){
    return (
        <>
            <Navbar/>

            <main>
                <Hero/>
                <Services/>
                <Results/>
                <Pricing/>
                <Contact/>
            </main>

            <Footer/>
        </>
    )
}

export default App;
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Prestations} from './components/prestations'
import { Garages} from './components/garages'
import { Services } from './components/services'
import { Garagiste } from './components/garagiste'
import { Testimonials } from './components/testimonials'
import { Aide} from './components/aide'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Vidange} from './components/vidange'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Prestations data={landingPageData.Prestations} />
      <Garages data={landingPageData.Garages} />
      <Services data={landingPageData.Services} />
      <Garagiste data={landingPageData.Garagiste} />
      
      <Aide data={landingPageData.Aide} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App

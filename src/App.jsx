import { useState, useEffect,React  } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch,Link } from 'react-router-dom'

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
const home = ()=>{return(<div><Header data={JsonData.Header}/>
<Prestations data={JsonData.Prestations} />
<Garages data={JsonData.Garages} />
<Services data={JsonData.Services} />
<Garagiste data={JsonData.Garagiste} />
<Aide data={JsonData.Aide} />
<Contact data={JsonData.Contact} />
</div>)}
const PageVidange =()=>{
  return (<Vidange data={JsonData.Vidange} /> )}
const App = () => {

  

  return (
  <BrowserRouter>
    <div>
    <Navigation/>
    <Switch>
      <Route  path="/" component={home}/>
      <Route path="/vidange" component={PageVidange} />
      <Route  path="/prestations" component={Prestations} />
      <Route  path="/garages" component={Garages} />
     
      
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App

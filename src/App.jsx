import { useState, useEffect, React } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Prestations } from './components/prestations'
import { Garages } from './components/garages'
import { Services } from './components/services'
import { GaragisteInscription } from './components/garagisteInscription'
import { Testimonials } from './components/testimonials'
import { Aide } from './components/aide'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Vidange } from './components/vidange'
import { Courroie } from './components/courroie'
import { Account } from './components/account'


const home = () => {
  return (<div><Header data={JsonData.Header} />
       <Contact data={JsonData.Contact} />
  </div>)
}
const PageGarages = () => {
  return (<Garages data={JsonData.Garages} />)
}
const PagePrestations = () => {
  return (<Prestations data={JsonData.Prestations} />)
}
const PageServices = () => {
  return (<Services data={JsonData.Services} />)
}
const PageAide = () => {
  return (<Aide data={JsonData.Aide} />)
}
const PageContact = () => {
  return (<Contact data={JsonData.Contact} />)
}
const PageVidange = () => {
  return (<Vidange data={JsonData.Vidange} />)
}
const PageCourroie = () => {
  return (<Courroie data={JsonData.Courroie} />)
}
const PageAccount =() =>{
  return (<Account data={JsonData.Account} />)
}
const PageGaragisteInsciption =() => {
  return (<GaragisteInscription data={JsonData.GaragisteInscription} />)
}
const App = () => {



  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/vidange" component={PageVidange} />
          <Route path="/prestations" component={PagePrestations} />
          <Route path="/garages" component={PageGarages} />
          <Route path="/entretien" component={PageServices} />
          <Route path="/aide" component={PageAide} />
          <Route path="/courroie" component={PageCourroie} />
          <Route path="/InscriptionProfessionnel" component={PageGaragisteInsciption} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

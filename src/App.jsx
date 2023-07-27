import React from 'react'
// import Header from './components/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from '../src/components/Layout'
import Films from './pages/Films'
import People from './pages/People'
import Planets from './pages/Planets'
import Starwars from './pages/StarShips'
import Species from './pages/Species'
import Vehicles from './pages/Vehicles'
import Test from './pages/Test'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'
import PlanetsPage from './pages/PlanetsPage'
import SpeciesPage from './pages/SpeciesPage'
import StartShipsPage from './pages/StartShipsPage'
import VehiclesPage from './pages/VehiclesPage'


export default function App(){
  return(
    <BrowserRouter>
       <Routes>
         <Route path = '/' element = {<Layout/>}>
            <Route index element = {<Home />} />
            <Route path='films' element = {<FilmsPage />} />
            <Route path='people' element = {<PeoplePage />} />
            <Route path='planets' element = {<PlanetsPage />} />
            <Route path='species' element = {<SpeciesPage />} />
            <Route path='starships' element = {<StartShipsPage />} />
            <Route path='vehicles' element = {<VehiclesPage />} />
        </Route>
      </Routes >
    </BrowserRouter>
  )
}
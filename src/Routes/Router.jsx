import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HotelList from '../Components/ListOfHotel/HotelList'
import { HomePage } from '../Components/HomePage/MainFolder/HomePage'
import {Infopage} from "../Components/Infopage/Infopage"
import { Footer } from '../Components/HomePage/Footer/Footer'
const Router = () => {
  return (
    <>
    <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route path="/hotelist">
              <HotelList/>
        </Route>
        <Route path="/info/:id">
            <Infopage/>
        </Route>
    </Switch>
    <Footer/>
    </>
  )
}

export default Router

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HotelList from '../Components/ListOfHotel/HotelList'
import { HomePage } from '../Components/HomePage/MainFolder/HomePage'
import {Infopage} from "../Components/Infopage/Infopage"
import { Footer } from '../Components/HomePage/Footer/Footer'
import IntroHost from "../Components/FirstHostPage/IntroHost"
import JoinHosting from "../Components/FirstHostPage/JoinHosting"
import BecomeHost from "../Components/BecomeHost/MainFolder/BecomeHost"
import PropertyType from "../Components/HoistingProperty/PropertyType/PropertyType"
import Hostplace from "../Components/HoistingProperty/HostPlace/HostPlace"
import HostAddress from "../Components/HoistingProperty/HostAddress/HostAddress"
import NumGuest from "../Components/HoistingProperty/NumOfGuest/NumGuest"
const Router = () => {
  return (
    <>
    <Switch>
        <Route exact path="/">
            <HomePage/>

        </Route>
        <Route path="/hotelist">
              <HotelList/>
              <Footer/>
        </Route>
        <Route path="/info/:id">
            <Infopage/>
            <Footer/>
        </Route>
        <Route path="/becomehost">
          <BecomeHost/>
        </Route>
        <Route exact path="/hosting">
          <IntroHost/>
        </Route>
        <Route path="/hosting/join">
          <JoinHosting/>
        </Route>
        <Route path="/hosting/type">
          <PropertyType/>
        </Route>
        <Route path="/hosting/place">
          <Hostplace/>
        </Route>
        <Route path="/hosting/address">
          <HostAddress/>
        </Route>
        <Route path="/hosting/guests">
          <NumGuest/>
        </Route>
    </Switch>
    </>
  )
}

export default Router

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HotelList from '../Components/ListOfHotel/HotelList'
import { HomePage } from '../Components/HomePage/MainFolder/HomePage'
import FixedNavbar from '../Components/PagesNav/FixedNavbar'
import {Infopage} from "../Components/Infopage/Infopage"
import { Footer } from '../Components/HomePage/Footer/Footer'
import IntroHost from "../Components/FirstHostPage/IntroHost"
import JoinHosting from "../Components/FirstHostPage/JoinHosting"
import BecomeHost from "../Components/BecomeHost/MainFolder/BecomeHost"
import PropertyType from "../Components/HoistingProperty/PropertyType/PropertyType"
import Hostplace from "../Components/HoistingProperty/HostPlace/HostPlace"
import HostAddress from "../Components/HoistingProperty/HostAddress/HostAddress"
import NumGuest from "../Components/HoistingProperty/NumOfGuest/NumGuest"
import Amenities from "../Components/HoistingProperty/HostAmenities/Amenities"
import Image from "../Components/HoistingProperty/Image/Image"
import Title from "../Components/HoistingProperty/Title/Title"
import Description from "../Components/HoistingProperty/Description/Description"
import Price from "../Components/HoistingProperty/Price/HostPrice"
import { Mainpayment } from '../Components/Payment/Mainpayment'
const Router = () => {
  return (
    <>
    <Switch>
        <Route exact path="/">
            <HomePage/>

        </Route>
        <Route path="/hotelist">
              <FixedNavbar/>
              <HotelList/>
              <Footer/>
        </Route>
        <Route path="/info/:id">
        <FixedNavbar/>
            <Infopage/>
            <Footer/>
        </Route>
        <Route path="/makepayment">
           <Mainpayment/>
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
        <Route path="/hosting/amenities">
          <Amenities/>
        </Route>
        <Route path="/hosting/images">
          <Image/>
        </Route>
        <Route path="/hosting/title">
          <Title/>
        </Route>
        <Route path="/hosting/description">
          <Description/>
        </Route>
        <Route path="/hosting/price">
          <Price/>
        </Route>
        <Route>
          <h1>Error:404 Page not found</h1>
        </Route>
        
    </Switch>
    </>
  )
}

export default Router

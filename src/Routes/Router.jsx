import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HotelList from '../Components/ListOfHotel/HotelList'

const Router = () => {
  return (
    <Switch>
        <Route path="/">
            
        </Route>
        <Route path="/hotellist">
              <HotelList/>
        </Route>
        <Route>

        </Route>
    </Switch>
  )
}

export default Router

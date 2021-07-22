import React, { useState } from 'react'
import  {makeStyles}  from "@material-ui/styles";
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { useTranslation } from 'react-i18next'
import styled from '../HotelList.module.css'
import { Button, Checkbox, Divider, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { useDispatch } from 'react-redux'
import { getHotelData } from '../../../Redux/HotelData/action'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown1: {
    position: 'absolute',
    top: "115%",
    right: 10,
    left: "0%",
    height: '150px',
    width: '390px',
    zIndex: 1,
    border: '1px solid rgb(209, 208, 208)',
    borderRadius: '20px',
    padding: '10px',
    paddingTop: '30px',
    backgroundColor: "rgb(245, 245, 245)",
    color: 'grey',
  },
  dropdown2: {
    position: 'absolute',
    top: "115%",
    right: 10,
    left: "19%",
    height: '300px',
    width: '390px',
    zIndex: 1,
    border: '1px solid rgb(209, 208, 208)',
    borderRadius: '20px',
    padding: '10px',
    paddingTop: '30px',
    backgroundColor: "rgb(245, 245, 245)",
    color: 'grey',
  },
  dropdown3: {
    position: 'absolute',
    top: "115%",
    right: 10,
    left: "35%",
    height: '180px',
    width: '390px',
    zIndex: 1,
    border: '1px solid rgb(209, 208, 208)',
    borderRadius: '20px',
    padding: '10px',
    paddingTop: '30px',
    backgroundColor: "rgb(245, 245, 245)",
    color: 'grey',
  },
  dropdown4: {
    position: 'absolute',
    top: "115%",
    right: 10,
    left: "52%",
    height: '150px',
    width: '390px',
    zIndex: 1,
    border: '1px solid rgb(209, 208, 208)',
    borderRadius: '20px',
    padding: '10px',
    paddingTop: '30px',
    backgroundColor: "rgb(245, 245, 245)", 
    color: 'grey',
  },
  dropdown5: {
    position: 'absolute',
    top: "115%",
    right: 10,
    left: "65%",
    height: '500px',
    width: '550px',
    zIndex: 1,
    border: '1px solid rgb(209, 208, 208)',
    borderRadius: '20px',
    padding: '10px',
    paddingTop: '30px',
    backgroundColor: "rgb(245, 245, 245)",
    color: 'grey',
  },
  switch1: {
    size: 'largest',
  },
  color: {
    backgroundColor: 'rgb(32, 32, 32)',
    color: 'white',
    marginLeft: '65%',
  },
  margin: {
    marginTop: '40px',
    marginBottom: '20px',
  },
  color2: {
    textDecoration: 'underline',
    color: 'grey',
  },
  marginR:{
    marginRight:"20px",
    marginLeft:"40%"
  },
  marginR1:{
    marginRight:"20px",
    marginLeft:"33%"
  },
  marginR2:{
    marginRight:"20px",
    marginLeft:"32.1%"
  },
  marginL:{
    marginRight:"20px",
  }
}))

export default function FilterButton() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const classes = useStyles()
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const [open5, setOpen5] = React.useState(false)

  const [state, setState] = React.useState({})

  const [valueS, setValueS] = React.useState(30)

  const [count,setCount]=useState({
     beds:0,
     bedrooms:0,
     bathrooms:0  
  })

  const handleSlider = (event, newValue) => {
    setValueS(newValue)
    setState({...state,
       price:valueS*100
    })
    //console.log(valueS)
  }
  const handleClick1 = () => {
    setOpen1((prev) => !prev)
  }
  const handleClick2 = () => {
    setOpen2((prev) => !prev)
  }
  const handleClick3 = () => {
    setOpen3((prev) => !prev)
  }
  const handleClick4 = () => {
    setOpen4((prev) => !prev)
  }
  const handleClick5 = () => {
    setOpen5((prev) => !prev)
  }
  const handleClickAway = () => {
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
    setOpen5(false)
  }

  const handleChange = (event) => {
    const { name, value, checked } = event.target
    let val = name === 'slider' ? value*100 : checked
    if(event.target.name==="villa"||event.target.name==="home"||event.target.name==="hotel"||event.target.name==="resort")
    {
         val=event.target.name
         event.target.name="typeofplace"
         console.log(val,event.target.name)
    }
    setState({ ...state, [event.target.name]: val })
  }

  const handleAdd = () => {
    let payload = { ...state }
    dispatch(getHotelData(payload))
  }
  const handleCount=(name,value)=>
  {
     setCount({...count,[name]:count[name]+value})
  }
  const handleAdd1 = () => {
  let payload={...state,...count}
    dispatch(getHotelData(payload))
  }
  const handleCancle = () => {
  setState({})
  }
  // console.log(data)
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <button type="button" onClick={handleClick1} className={styled.btn1}>
          {t(`cancel.1`)}
        </button>
        {open1 ? (
          <div className={classes.dropdown1}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={
                    <Switch
                      name="cancel"
                      onChange={handleChange}
                      color="primary"
                      className={classes.switch1}
                    />
                  }
                  label="Only show stays that offer cancellation flexibility"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
            <Divider className={classes.margin} />
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd}>
              Save
            </Button>
          </div>
        ) : null}
        <button type="button" onClick={handleClick2} className={styled.btn}>
          {t(`place.1`)}
        </button>
        {open2 ? (
          <div className={classes.dropdown2}>
            <FormGroup column>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.typeofplace}
                    onChange={handleChange}
                    name="villa"
                    color="primary"
                  />
                }
                label="Villa"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.typeofplace}
                    onChange={handleChange}
                    name="hotel"
                    color="primary"
                  />
                }
                label="Hotel"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.typeofplace}
                    onChange={handleChange}
                    name="home"
                    color="primary"
                  />
                }
                label="Home"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.typeofplace}
                    onChange={handleChange}
                    name="resort"
                    color="primary"
                  />
                }
                label="Resort"
              />
            </FormGroup>
            <Divider className={classes.margin} />
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd}>
              Save
            </Button>
          </div>
        ) : null}
        <button type="button" onClick={handleClick3} className={styled.btn}>
          {t(`price.1`)}
        </button>
        {open3 ? (
          <div className={classes.dropdown3}>
            <Typography id="continuous-slider" gutterBottom>
              The average nightly price is ₹1500
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <MonetizationOnIcon />
              </Grid>
              <Grid item xs>
                <Slider
                  value={valueS}
                  onChange={handleSlider}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <MonetizationOnIcon />
              </Grid>
            </Grid>
            <Divider className={classes.margin} />
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd}>
              Save
            </Button>
          </div>
        ) : null}
        <button type="button" onClick={handleClick4} className={styled.btn}>
          {t(`booking.1`)}
        </button>
        {open4 ? (
          <div className={classes.dropdown4}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={
                    <Switch
                      name="instant_booking"
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="Listings you can book without waiting for host approval"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
            <Divider className={classes.margin} />
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd}>
              Save
            </Button>
          </div>
        ) : null}
        <button type="button" onClick={handleClick5} className={styled.btn}>
          {t(`more.1`)}
        </button>
        {open5 ? (
          <div className={classes.dropdown5}>
            <div style={{display:"flex"}}>
               <h4>Beds</h4>
               <Button disabled={count.beds===5}className={classes.marginR} onClick={()=>handleCount("beds",1)}>+</Button>
               <h4 className={classes.marginL} >{count.beds}</h4>
               <Button disabled={count.beds===0}className={classes.marginL} onClick={()=>handleCount("beds",-1)}>-</Button>
            </div>
            <div  style={{display:"flex"}}>
               <h4>Bedrooms</h4>
               <Button disabled={count.bedrooms===4} className={classes.marginR1} onClick={()=>handleCount("bedrooms",1)}>+</Button>
               <h4 className={classes.marginL} >{count.bedrooms}</h4>
               <Button disabled={count.bedrooms===0} className={classes.marginL}  onClick={()=>handleCount("bedrooms",-1)}>-</Button>
            </div>
            <div  style={{display:"flex"}}>
               <h4>Bathrooms</h4>
               <Button disabled={count.bathrooms===3}className={classes.marginR2} onClick={()=>handleCount("bathrooms",1)}>+</Button>
               <h4 className={classes.marginL} >{count.bathrooms}</h4>
               <Button disabled={count.bathrooms===0} className={classes.marginL} onClick={()=>handleCount("bathrooms",-1)}>-</Button>
            </div>
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd1}>
              Save
            </Button>
             <Divider className={classes.margin} />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.ac}
                    onChange={handleChange}
                    name="ac"
                    color="primary"
                  />
                }
                label="AC"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.tv}
                    onChange={handleChange}
                    name="tv"
                    color="primary"
                  />
                }
                label="TV"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.pool}
                    onChange={handleChange}
                    name="pool"
                    color="primary"
                  />
                }
                label="Pool"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.parking}
                    onChange={handleChange}
                    name="parking"
                    color="primary"
                  />
                }
                label="Parking"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.smoking}
                    onChange={handleChange}
                    name="smoking"
                    color="primary"
                  />
                }
                label="Smoking allow"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.pets}
                    onChange={handleChange}
                    name="pets"
                    color="primary"
                  />
                }
                label="Pets allow"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.kitchen}
                    onChange={handleChange}
                    name="kitchen"
                    color="primary"
                  />
                }
                label="Kitchen"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.self_checkin}
                    onChange={handleChange}
                    name="self_checkin"
                    color="primary"
                  />
                }
                label="Self Checking"
              />
            </FormGroup>
            <Divider className={classes.margin} />
            <Button className={classes.color2} onClick={() => handleCancle()}>
              Clear
            </Button>
            <Button className={classes.color} onClick={handleAdd}>
              Save
            </Button>
          </div>
        ) : null}
      </div>
      
    </ClickAwayListener>
    
  )
}

import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import styled from './List.module.css'
import { Divider } from '@material-ui/core'
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import {useHistory} from "react-router-dom"
const List = ({
  _id,
  img,
  name,
  price,
  rating,
  cancel,
  typeofplace,
  instant_booking,
  parking,
  pool,
  tv,
  kitchen,
  wifi,
  heating,
  hair_dryer,
  ac,
  pets,
  smoking,
  bedrooms,
  bathrooms,
  beds,
  self_checkin,
  no_of_guest,
  gym,
  beach_front,
  river_side,
  hostedby,
  review
}) => {
  const handleDragStart = (e) => e.preventDefault();
  const history = useHistory();
  const items = [
    <img
      className={styled.img}
      src={img[0]}
      alt="img1"
      onDragStart={handleDragStart}
    />,
    <img
      className={styled.img}
      src={img[1]}
      alt="img2"
      onDragStart={handleDragStart}
    />,
    <img
      className={styled.img}
      src={img[2]}
      alt="img3"
      onDragStart={handleDragStart}
    />,
    <img
      className={styled.img}
      src={img[3]}
      alt="img4"
      onDragStart={handleDragStart}
    />,
    <img
      className={styled.img}
      src={img[4]}
      alt="img5"
      onDragStart={handleDragStart}
    />,
  ]
  let handleClick=(id)=>{
    history.push(`/info/${id}`)
  }
  //className={styled.}
  //console.log(review)
  return (
    <div  className={styled.padding}>
      {/* <div className={styled.flex1}>
          <div className={styled.div1}>
           <AliceCarousel autoWidth={true} mouseTracking items={items} />
           <div>{name}</div>
           <div className={styled.line}></div>
           <p className={styled.font}>{no_of_guest} guests . {bedrooms} bedrooms . {beds} beds</p>
          </div>
        </div> */}
      <div  className={styled.flex}>
        <div className={styled.div1}>
          <AliceCarousel autoWidth={true} mouseTracking items={items} />
        </div>

        <div onClick={()=>handleClick(_id)}  className={styled.div}>
          <div>{name}</div>
          <div className={styled.line}></div>
          <p className={styled.font}>
            {no_of_guest} guests . {bedrooms} bedrooms . {beds} beds
          </p>
          <div className={styled.flex}>
            {`${ac}` ? <p className={styled.font}>AC</p> : ''}
            <p className={styled.font} style={{ margin: '9px' }}>
              {' '}
              .{' '}
            </p>
            {`${wifi}` ? <p className={styled.font}> Wifi </p> : ''}
            <p className={styled.font} style={{ margin: '9px' }}>
              {' '}
              .{' '}
            </p>
            {`${parking}` ? <p className={styled.font}> Free Parking </p> : ''}
          </div>
          <div className={styled.flex}>
            <StarRateRoundedIcon  className={styled.color}/>
            <h5>{rating}</h5>
          </div>
          <div className={styled.float}>
            <h4>$ {price} / night</h4>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
}

export default List

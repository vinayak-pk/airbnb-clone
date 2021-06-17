import React from "react";
import Logo2 from "../Pictures/Logo2.svg";
import style from "./Amenities.module.css";
import Button from "@material-ui/core/Button";
import WifiIcon from "@material-ui/icons/Wifi";
import TvIcon from "@material-ui/icons/Tv";
import KitchenIcon from "@material-ui/icons/Kitchen";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import GavelIcon from "@material-ui/icons/Gavel";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PetsIcon from "@material-ui/icons/Pets";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PoolIcon from "@material-ui/icons/Pool";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from "react-router-dom";
const Amenities = () => {
  return (
    <div className={style.containerAmeneties}>
      <div className={style.dataContainerAmeneties}>
        <div className={style.subData3ContainerAmeneties1}>
          <div>
            <img
              className={style.containerGuestNum__icon}
              src={Logo2}
              alt="logo"
            />
          </div>
          <div className={style.subDatatextAmeneties}>
            <h2>
              Let your guests know what
              <br />
              your place has to offer?
            </h2>
          </div>
        </div>
        <div className={style.subData3ContainerAmeneties}>
          <div className={style.containerHostPlace__rightAmeneties}>
            <Button variant="outlined">Help</Button>
            <Button variant="outlined">Save and exit</Button>
          </div>
          <div className={style.inputfielConAmeneties}>
            <h2>What about these guest amenities?</h2>
            <div className={style.dropsAmeneties}>
              <ul>
                <li>
                  <div>
                    <WifiIcon />
                    <Link href="#">Wifi</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <PoolIcon />
                    <Link href="#">Pool</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <TvIcon />
                    <Link href="#">TV</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className={style.dropsAmeneties}>
              <ul>
                <li>
                  <div>
                    <KitchenIcon />
                    <Link href="#">Kitchen</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <DriveEtaIcon />
                    <Link href="#">Free Parking</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <GavelIcon />
                    <Link href="#">Hair Dryer</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className={style.dropsAmeneties}>
              <ul>
                <li>
                  <div>
                    <AcUnitIcon />
                    <Link href="#">AC</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <PetsIcon />
                    <Link href="#">Pets</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <SmokingRoomsIcon />
                    <Link href="#">Smoking</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className={style.dropsAmeneties}>
              <ul>
                <li>
                  <div>
                    <CheckCircleIcon />
                    <Link href="#">Self Check-in</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <DeveloperBoardIcon />
                    <Link href="#">Heating</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <MeetingRoomIcon />
                    <Link href="#">Instant Booking</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.footerContAmeneties}>
            <Button variant="outlined">Back</Button>
            <Button variant="outlined">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

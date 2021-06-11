import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid} from "@material-ui/core"

import { getData } from "../../Redux/infopage/action";
import styles from  "./infopage.module.css";
import { Description } from "../Description/Description";
import { Photogrid } from "../Collage/Collage";
import { Summary } from "../Payment/Summary";
import {Navsum} from "../Navsum/Navsum"
export function Infopage() {
  const [infonav,setInfonav] = React.useState(false);
  let dispatch = useDispatch();
  const {data} = useSelector((state) => state.info);
  console.log("here");
  React.useEffect(() => {
    dispatch(getData(1));
  }, [dispatch]);
  let reviews = data?.review
  console.log(data)
  
  React.useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 450) {
                setInfonav(true)
      }else{
        setInfonav(false)
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (<>
    {infonav&&<Navsum/>}
    <div className={styles.boundary}>
      <div>
        <h2 className={styles.header}>{data.name}</h2>
        <div>
        <i className="fa fa-star" style={{fontSize:"16px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
           <span><b>{data.rating}</b></span>
           <span> (<u  className={styles.topdec}>{reviews?.length} reviews</u>)</span>
           <span> · </span>
           <span className={styles.topdec}>{data.location},{data.location_nearby},India</span>
        </div>
      </div>
      <Photogrid/>
      <div style={{display:"flex",gap:"10%"}}>
        <Grid  xs={7}>
            <Description/>
          </Grid>
          <Grid xs={5}>
              <Summary data={data}/>
          </Grid>
      </div>
    </div>
    </>
  );
}

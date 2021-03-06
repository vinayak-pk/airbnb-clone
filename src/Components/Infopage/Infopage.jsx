import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getData } from "../../Redux/Infopage/action";
import { InfoMap } from "../Infomap/Map";
import styles from "./infopage.module.css";
import { Description } from "../Description/Description";
import { Photogrid } from "../Collage/Collage";
import { Summary } from "../Payment/Summary";
import { Navsum } from "../Navsum/Navsum";
import { Comments } from "../Comments/Comments";
import { Ownerinfo } from "../Comments/Ownerinfo";
import Loading from "../isLoading/loading";
export function Infopage() {
  const [infonav, setInfonav] = React.useState(false);
  let dispatch = useDispatch();
  let param = useParams();
  const { data, isLoading, isError } = useSelector((state) => state.info);
  console.log("here");
  React.useEffect(() => {
    dispatch(getData(param.id));
  }, [dispatch]);
  let reviews = data?.review;
  console.log(data);

  React.useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 450) {
        setInfonav(true);
      } else {
        setInfonav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <h1>Error</h1>
  ) : (
    <>
      {infonav && <Navsum />}
      <div className={styles.boundary}>
        <div>
          <div>
            <h2 className={styles.header}>{data.name}</h2>
            <div>
              <i
                className="fa fa-star"
                style={{
                  fontSize: "16px",
                  color: "rgb(255,56,92)",
                  paddingTop: "10px",
                }}
              />
              <span>
                <b>{data.rating}</b>
              </span>
              <span>
                {" "}
                (<u className={styles.topdec}>{reviews?.length} reviews</u>)
              </span>
              <span> ?? </span>
              <span className={styles.topdec}>
                {data.location},{data.location_nearby},India
              </span>
            </div>
          </div>
          <div id="photo">
            <Photogrid />
          </div>
          <div style={{ display: "flex", gap: "8%", margin: "10px 0" }}>
            <Grid id="amenties" xs={7}>
              <Description />
            </Grid>
            <Grid xs={5}>
              <Summary data={data} />
            </Grid>
          </div>
          <br />
          <hr />
          <div id="review">
            <Comments data={data} />
          </div>
        </div>
        <br />
        <hr />
        <div id="location" className={styles.imapsholder}>
          <h1>Location</h1>
          <InfoMap data={data} isMarkerShown />
        </div>
        <hr />
        <Ownerinfo data={data} />
      </div>
    </>
  );
}

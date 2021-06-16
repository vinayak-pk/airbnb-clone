import React from "react";
import { makeStyles } from '@material-ui/styles';
import {Grid} from "@material-ui/core"
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: 'white', 
      gap:"10px",
      width:"104%",
    },
    gridList: {
      width: 500,
      height: 450,
    },
    gridPad:{
      padding: '0.7%',
      paddingBottom:'0px',
      width: '100%',
    },
    box:{
      paddingTop: '20px' 
    }
  }));

export function Photogrid(){  
    let {data} = useSelector(state=>state.info);
    let first
      if(data.img!==undefined){
        first = data.img[0];
      }
    const classes =useStyles();       
    return <div className={classes.root}>
              <Grid className={classes.box} container spacing={"1"}>
                  <Grid item xs={6}>
                    <img style={{width:"99%",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} src={first} alt="something" />
                  </Grid>
                  <Grid className={classes.gridPad} container xs={6} spacing={1}>
                    {data.img?.map((image,i)=>(
                      i!==0&&i<5&&<Grid key={i} xs={6}>
                          <img style={i===2?{width:"98%",borderTopRightRadius:"10px"}:i===4?{width:"98%",borderBottomRightRadius:"10px"}:{width:"98%"}} src={image} alt="something" />
                      </Grid>
                      ))}
                  </Grid>
              </Grid>
          </div>
}
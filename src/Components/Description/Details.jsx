import React from "react";
import {Typography,Box,makeStyles} from "@material-ui/core"
import {MeetingRoomOutlined,CalendarTodayOutlined,BookmarkBorderOutlined,HomeOutlined} from "@material-ui/icons"


const useStyles = makeStyles((theme)=>({
    root:{
      display: 'flex',
      padding:'2% 0'
    },
    box1:{
      paddingLeft:'10px'
    }
}));


export function Details({data}){
  let classes = useStyles()
    return(
        <div>
          {data.self_checkin&&<Box className={classes.root}>
              <Box>
                <HomeOutlined/>
              </Box>
              <Box className={classes.box1}>
                <b>Entire home</b><br/>
                <Typography variant="body2">You’ll have the property to yourself.</Typography>
              </Box>
            </Box>}
            {data.self_checkin&&<Box className={classes.root}>
              <Box>
                <MeetingRoomOutlined/>
              </Box>
              <Box className={classes.box1}>
                <b>Self check-in</b><br/>
                <Typography variant="body2">You can check in with the doorman.</Typography>
              </Box>
            </Box>}
            {data.pool&&<Box className={classes.root}>
              <Box>
                <BookmarkBorderOutlined/>
              </Box>
              <Box className={classes.box1}>
              <b>Pool</b><br/>  
              <Typography variant="body2">Guests often search for this popular amenity</Typography>
              </Box>
            </Box>}
            {data.cancel&&<Box className={classes.root}>
              <Box>
                <CalendarTodayOutlined/>
              </Box>
              <Box className={classes.box1}>
                <b>Free cancellation until 3:00 PM on 9 Jun</b>
              </Box>
            </Box>}
        </div>
    )
}
// import React, { useState } from "react";
// import { useDispatch,useSelector ,shallowEqual} from "react-redux";
// import "./Nav.css";
// import "./NavChild.css";
// import PropTypes from "prop-types";
// import { makeStyles, withStyles } from "@material-ui/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import TextField from "@material-ui/core/TextField";
// import { DetectClick } from "./DetectClick";
// import Box from "@material-ui/core/Box";
// import SearchDate from "../DateSearch/SearchDate";
// import { add_input } from "../../../Redux/NavBar/action";
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// const StyledTabs = withStyles({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& > span": {
//       maxWidth: 100,
//       width: "100%",
//       backgroundColor: "#ffffff",
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// const StyledTab = withStyles((theme) => ({
//   root: {
//     textTransform: "none",
//     color: "#070707",
//     fontWeight: theme.typography,
//     fontSize: "15px",
//     marginRight: "10px auto",
//     "&:focus": {
//       opacity: 1,
//     },
//   },
// }))((props) => <Tab disableRipple {...props} />);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   padding: {
//     padding: "0%",
//   },
//   margin: {
//     margin: "10px auto",
//   },
//   demo2: {
//     width: "100%",
//     backgroundColor: "red",
//     borderRadius: "15px",
//   },
// }));
// const useStyles2 = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: "10px",
//       width: "18%",
//       height: "45px",
//       backgroundColor: "white",
//       borderRadius: "5%",
//       borderRight: "1px solid black",
//       border: "transparent",
//     },
//   },
// }));
// const useStyles3 = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: "10px",
//       width: "100%",
//       backgroundColor: "white",
//       borderRadius: "5%",
//       borderRight: "1px solid black",
//     },
//   },
// }));

// const initState = {
//   location: "",
//   customerDate: "",
//   guests: 0,
// };

// const NavChild = () => {
//   const dropdownRef = React.useRef(null);
//   const [isActive, setIsActive] = DetectClick(dropdownRef, false);
//   const [adult, setAdult] = React.useState(0);
//   const [child, setChild] = React.useState(0);
//   const [infant, setInfant] = React.useState(0);
//   const [showquant, setShowQuant] = useState(0);
//   const [tempVal, setTempVal] = React.useState(initState);
//   // const [locate,setLocate] = react.useState("")
//   const classes2 = useStyles2();
//   const classes = useStyles();
//   const classes3 = useStyles3();
//   const [value, setValue] = React.useState(0);

//   const dispatch = useDispatch();

//   const handleAdult = (e) => {
//     setAdult((prev) => prev + e);
//     setShowQuant((prev) => prev + e);
//   };
//   const handleChild = (e) => {
//     setChild((prev) => prev + e);
//     setShowQuant((prev) => prev + e);
//   };
//   const handleInfant = (e) => {
//     setInfant((prev) => prev + e);
//     setShowQuant((prev) => prev + e);
//   };
//   const CustomerData = () => {
//     setTempVal({ ...tempVal, guests: showquant });
//     dispatch(add_input(tempVal));
//   };

//   const locations = (e) => {
//     setTempVal({ ...tempVal, location: e.target.value });
//   };
//   // console.log(tempVal);
//   // console.log(showquant);
//   const {guests,location,customerDate}= useSelector((state)=> state.Navbar,shallowEqual)
//   console.log(guests,location,customerDate)
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div className="formInputMainDiv">
//       <div className={classes.root}>
//         <div className={classes.demo2}>
//           <StyledTabs
//             value={value}
//             onChange={handleChange}
//             aria-label="styled tabs example"
//           >
//             <StyledTab label="Places to stay" />
//             <StyledTab label="Experiences" />
//             <StyledTab label="Online Experiences" />
//           </StyledTabs>
//           <TabPanel value={value} index={0}>
//             <div className={classes2.root}>
//               <input
//                 id="standard-basic"
//                 label="Locations"
//                 placeholder="LOCATIONS"
//                 onChange={locations}
//               />

//               <SearchDate setTempVal={setTempVal} tempVal={tempVal} />
//               <button onClick={() => setIsActive(!isActive)}>
//                 {showquant ? showquant : "Guests"}
//               </button>

//               <SearchRoundedIcon
//                 onClick={CustomerData}
//                 style={{
//                   width: "25px",
//                   borderRadius: "50%",
//                   height: "25px",
//                   margin: "10px 0px auto",
//                   backgroundColor: "rgb(255, 50, 84)",
//                   cursor: "pointer",
//                 }}
//               />
//             </div>

//             <p></p>

//             <nav
//               ref={dropdownRef}
//               className={`drops ${isActive ? "active" : "inactive"}`}
//             >
//               <ul>
//                 <li>
//                   <a href="#">Adults</a>
//                   Ages 13 or above
//                   <div>
//                     <button
//                       onClick={() => handleAdult(-1)}
//                       disabled={adult === 0}
//                     >
//                       -
//                     </button>
//                     <p>{adult}</p>
//                     <button onClick={() => handleAdult(1)}>+</button>
//                   </div>
//                 </li>
//                 <li>
//                   <a href="#">Children</a>
//                   Ages 2-12
//                   <div>
//                     <button
//                       onClick={() => handleChild(-1)}
//                       disabled={child === 0}
//                     >
//                       -
//                     </button>
//                     <p>{child}</p>
//                     <button onClick={() => handleChild(1)}>+</button>
//                   </div>
//                 </li>
//                 <li>
//                   <a href="#">Infants</a>
//                   Under 2
//                   <div>
//                     <button
//                       onClick={() => handleInfant(-1)}
//                       disabled={infant === 0}
//                     >
//                       -
//                     </button>
//                     <p>{infant}</p>
//                     <button onClick={() => handleInfant(1)}>+</button>
//                   </div>
//                 </li>
//               </ul>
//             </nav>
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             <form className={classes3.root} noValidate autoComplete="off">
//               <TextField id="standard-basic" label="Locations" />
//               <TextField id="standard-basic" label="Date" />
//             </form>
//           </TabPanel>

//           {/* <Typography className={classes.padding} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavChild;

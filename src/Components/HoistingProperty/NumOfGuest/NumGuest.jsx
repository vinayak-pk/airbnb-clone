// import React from "react";
// import Logo2 from "../Pictures/Logo2.svg";
// import "./NumGuest.css";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const NumGuest = () => {
//   return (
//     <div className="containerGuestNum">
//       <div className="dataContainer2">
//         <div className="subData2Container1">
//           <div>
//             <img className="containerGuestNum__icon" src={Logo2} alt="logo" />
//           </div>
//           <div className="subDatatext">
//             <h1>
//               How many guests would you like to <br />
//               welcome?
//             </h1>
//           </div>
//         </div>
//         <div className="subData2Container2">
//           <div className="containerHostPlace__right2 ">
//             <Button variant="outlined">Help</Button>
//             <Button variant="outlined">Save and exit</Button>
//           </div>
//           <div className="inputfielCont">
//           <ul>
//                 <li>
//                   <Link href="#">Adults</Link>
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
//                   <Link href="#">Children</Link>
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
//                   <Link href="#">Infants</Link>
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
//           </div>
//           <div className="footerCont">
//             <Button variant="outlined">Back</Button>
//             <Button variant="outlined">Next</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NumGuest;

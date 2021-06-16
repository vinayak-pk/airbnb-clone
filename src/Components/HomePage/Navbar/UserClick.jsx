import React from "react";
import "./UserClick.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function UserClick() {
  const [isAct, setisAct] = React.useState(false);
  const onClick = () => setisAct(!isAct);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <ReorderIcon style={{ width: "26px", height: "22px" }} />
          <Avatar
            style={{
              width: "32px",
              height: "32px",
              background: "rgb(113,113,113)",
            }}
          />
        </button>
        {isAct && (
          <nav className="menu active">
            <ul>
              <li>
                <Link href="#">Messages</Link>
              </li>
              <li>
                <Link href="#">Notifications</Link>
              </li>
              <li>
                <Link href="#">Trips</Link>
              </li>
              <li>
                <Link href="#">Wishlist</Link>
              </li>
              <li>
                <Link href="#">Host Your home</Link>
              </li>
              <li>
                <Link href="#">Host an experience</Link>
              </li>
              <li>
                <Link href="#">Account</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="#">Logout</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

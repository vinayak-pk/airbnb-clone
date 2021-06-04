import React, { useRef } from "react";
import "./UserClick.css";
import { DetectClick } from "./DetectClick";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Avatar } from "@material-ui/core";
export default function UserClick() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <ReorderIcon />
          <Avatar />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Notifications</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Host Your home</a>
            </li>
            <li>
              <a href="#">Host an experience</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

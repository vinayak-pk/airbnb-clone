import React from "react";
import styles from "./Nav.module.css";
import { FaAirbnb } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import UserClick from "../HomePage/Navbar/UserClick";


import {Link} from "react-router-dom";
const FixedNavbar = () => {
  const { t, i18n } = useTranslation();
  const handleChange=(e)=>
  {
      i18n.changeLanguage(e.target.value);
  }

  return (
    
    <div className={styles.header}>
      <div>
        <Link to="/"><FaAirbnb className={styles.headericon} /></Link>
      </div>
      <div className={styles.header__right}>
            <select onChange={handleChange}>
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
            </select>
           <UserClick/>
      </div>
    </div>
  );
};

export default FixedNavbar;

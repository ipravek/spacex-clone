import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import hamburger from "@/assets/images/menu.svg";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // showSidebar ? setShowSidebar(false) : setShowSidebar(true);
    console.log(showSidebar)
  }, [showSidebar]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src={logo} alt="" />
          </div>

          <div className={styles.navLinks}>
            <div className={styles.navItem}>
              <a href="/">FALCON 9</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">FALCON HEAVY</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">DRAGON</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">STARSHIP</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">HUMAN SPACEFLIGHT</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">RIDESHARE</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">STARSHIELD</a>
            </div>
            <div className={styles.navItem}>
              <a href="/">STARLINK</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <a href="/">SHOP</a>
        {/* {showSidebar ? ( */}
          <Image
            src={hamburger}
            alt=""
            onClick={() => setShowSidebar(true)}
            className={styles.sidebarMenu}
          />
        {/* ) : (
          <div
            className={styles.cross}
            onClick={() =>  setShowSidebar(false)}
          >
            X
          </div>
        )} */}
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;

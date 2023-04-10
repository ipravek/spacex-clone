import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "./../../assets/images/logo.png";
import Sidebar from "./../sidebar/Sidebar";
import hamburger from "./../../assets/images/Menu.svg";
import Link from "next/link";

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
              <Link href="/">FALCON 9</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">FALCON HEAVY</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">DRAGON</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">STARSHIP</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">HUMAN SPACEFLIGHT</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">RIDESHARE</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">STARSHIELD</Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/">STARLINK</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <Link href="/">SHOP</Link>
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

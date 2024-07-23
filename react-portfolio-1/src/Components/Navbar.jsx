import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImgUrl } from "../utils";
function Navbar(){
    const[ menuOpen,setmenuOpen]=useState(false);
    return<nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img src={menuOpen? getImgUrl("closeNav.png") : getImgUrl("openNav.png")} alt="menu-button" className={styles.menuBtn} onClick={()=>setmenuOpen(!menuOpen)}></img>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setmenuOpen(false)}>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Connect">Connect</a></li>
            </ul>
        </div>
    </nav>
};
export default Navbar;
import React from 'react'
import styles from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (

    <header className={styles.Toolbar}>
        <DrawerToggle openSideDrawer = {props.openSideDrawer}/>

        <div className={styles.Logo}>
            <Logo/>
        </div>
        <nav className={styles.DescktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
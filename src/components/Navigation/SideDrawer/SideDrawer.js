import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from './SideDrawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxil/Auxil";

const sideDrawer = (props) => {

    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Auxil>
            <Backdrop show ={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')} >
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>

        </Auxil>
    )

}

export default sideDrawer
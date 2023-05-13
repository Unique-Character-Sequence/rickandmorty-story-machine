import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";

import styles from './NavigationBar.module.css';

const NavigationBar = (props) => {
    return (
        <Box className={styles.box} sx={{display: "flex", backgroundColor: "#00A0FF", justifyContent: "space-between"}}>
            <RouterLink style={{display: "flex"}} to="/">
                <img className={styles.box}
                    src={props.img1} alt=""/>
            </RouterLink>
            <div style={{display: "flex"}}>
                <img
                    style={{borderRadius: "8px"}}
                    src={props.userPfp} alt=""/>
            </div>
        </Box>
    );
};

export default NavigationBar;
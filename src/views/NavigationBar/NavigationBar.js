import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";
import styles from './NavigationBar.module.css';
import Button from "@mui/material/Button";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import UserIcon from "./UserIcon";

const NavigationBar = (props) => {
    return (
        <Box className={styles.box} sx={{display: "flex", backgroundColor: "#00A0FF", justifyContent: "space-between"}}>
            <RouterLink style={{display: "flex"}} to="/">
                <img className={styles.box}
                     src={props.img1} alt=""/>
            </RouterLink>
            <div style={{display: "flex"}}>
                <Button variant="outlined"><AiOutlineShoppingCart color="#FFF" size="3em"/></Button>
                <UserIcon userPfp={props.userPfp}/>
            </div>
        </Box>
    );
};

export default NavigationBar;
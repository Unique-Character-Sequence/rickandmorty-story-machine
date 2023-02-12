import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import RaM_portal_2 from "../assets/RaM_API_logo.png";
import Box from "@mui/material/Box";

// Я решил вложить стиль прямо сюда, а не передавать
const styleCenter = {display: "flex", justifyContent: "center"};

const NavigationBar = () => {
    return (
        <Box sx={{...styleCenter, backgroundColor: "#00A0FF"}}>
            <RouterLink style={styleCenter} to="/">
                <img
                    style={{maxWidth: "70px", imageRendering: "-webkit-optimize-contrast"}}
                    src={RaM_portal_2} alt=""/>
            </RouterLink>
        </Box>
    );
};

export default NavigationBar;
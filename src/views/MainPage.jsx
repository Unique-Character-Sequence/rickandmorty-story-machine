import React from 'react';
import RaM_portal_2 from '../assets/RaM_portal_2_cut.png'
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

const styleCenter = {display: "flex", justifyContent: "center"};


const MainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#00A0FF"}}>
                    <img style={{width: "40%", maxWidth:"400px", imageRendering: "-webkit-optimize-contrast"}} src={RaM_portal_2} alt=""/>
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF", padding: useTheme().spacing(1)}}>
                    Pick Your Character:
                    Choosing between them
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                    <RouterLink to="/"><Button variant="outlined">Back</Button></RouterLink>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MainPage;
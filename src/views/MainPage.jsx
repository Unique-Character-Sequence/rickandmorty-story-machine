import React from 'react';
import RaM_portal_2 from '../assets/RaM_portal_2.png'
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';

const styleCenter = {display: "flex", justifyContent: "center"};

const MainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid xs={12} sx={{...styleCenter, backgroundColor: "#00A0FF"}}>
                <img style={{width: "40%"}} src={RaM_portal_2} alt=""/>
            </Grid>
            <Grid xs={12} sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                <RouterLink to="/"><Button style={{}} variant="outlined">Back</Button></RouterLink>
            </Grid>
        </Grid>
    );
};

export default MainPage;
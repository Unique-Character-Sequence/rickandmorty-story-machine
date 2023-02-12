import React from 'react';
import RaM_portal_2 from '../assets/RaM_API_logo.png'
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import NavigationBar from "./NavigationBar";
import axios from "axios";
import {UsePaginationItem as log} from "@mui/material/usePagination/usePagination";

const API_URL = "https://rickandmortyapi.com/api"

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getAPICharactersArray = () => {
    const randomNum = randomNumberInRange(1, 826)
    axios.get(`${API_URL}/character/${randomNum}`)
        .then(response => {
            // Handle the successful response
            console.log(response.data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}



const MainPage = () => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
                <NavigationBar style={styleCenter}/>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                        Pick Your Character: <br/>
                        Choosing between them <br/>
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                    <Button onClick={getAPICharactersArray} variant="outlined">Generate</Button>
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
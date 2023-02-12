import React, {useEffect, useState} from 'react';
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
import Typography from "@mui/material/Typography";

const API_URL = "https://rickandmortyapi.com/api"

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getAPICharactersArray = (setImageUrl) => {
    const randomNum = randomNumberInRange(1, 826)
    axios.get(`${API_URL}/character/${randomNum}`)
        .then(response => {
            const imageUrl = response.data.image
            const name = response.data.name

            setImageUrl(imageUrl)
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
    const [imageUrlChar1, setImageUrlChar1] = useState([]);

    useEffect(() => {
        // Call the fetchImage function and pass the setImageUrl callback
        getAPICharactersArray(setImageUrlChar1);
    }, []);
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
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <img src={imageUrlChar1 ? imageUrlChar1 : ""} alt=""/>
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                    <Button onClick={() => getAPICharactersArray(setImageUrlChar1)} variant="outlined">Generate</Button>
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
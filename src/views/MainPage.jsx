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

const getAPICharactersArray = (setCharacter) => {
    const randomNum = randomNumberInRange(1, 826)
    axios.get(`${API_URL}/character/${randomNum}`)
        .then(response => {
            const name = response.data.name
            const imageUrl = response.data.image
            const species = response.data.species
            const location = response.data.location.name
            const character = {name, imageUrl, species, location} // instead of {image: image, name: name}
            setCharacter(character)
            console.log(response.data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

const MainPage = () => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};

    const [character1, setCharacter1] = useState({});
    const [character2, setCharacter2] = useState({});
    const [character3, setCharacter3] = useState({});

    useEffect(() => {
        // Call the fetchImage function and pass the setImageUrl callback
        getAPICharactersArray(setCharacter1);
    }, []);
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
                <NavigationBar style={styleCenter}/>
            </Grid>-
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    Pick Your Character: <br/>
                    Choosing between them <br/>
                </Box>
            </Grid>
            <Grid xs={12}>
                {/*Character 1 card*/}

                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography variant="h6">{character1.name ? character1.name : ""}</Typography>
                </Box>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <img src={character1.imageUrl ? character1.imageUrl : ""} alt=""/>
                </Box>

                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography variant="subtitle2">{character1.location ? `Location: ${character1.location}` : ""}</Typography>
                </Box>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography variant="subtitle2">{character1.species ? `Species: ${character1.species}` : ""}</Typography>
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                    <Button onClick={() => getAPICharactersArray(setCharacter1)}
                            variant="outlined">Generate</Button>
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
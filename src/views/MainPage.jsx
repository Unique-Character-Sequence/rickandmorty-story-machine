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
import CharacterCard from "./CharacterCard";
import styles from './Card.module.css';
import randomNumberInRange from '../utils/randomNumberInRange'

const API_URL = "https://rickandmortyapi.com/api"

const getAPICharactersArray = (setCharacter) => {
    const randomNum = randomNumberInRange(1, 826)
    axios.get(`${API_URL}/character/${randomNum}`)
        .then(response => {
            const name = response.data.name
            const imageUrl = response.data.image
            const species = response.data.species
            const location = response.data.location.name
            const id = response.data.id
            const character = {name, imageUrl, species, location, id} // instead of {image: image, name: name}
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
        getAPICharactersArray(setCharacter2);
        getAPICharactersArray(setCharacter3);
    }, []);
    return (
        <Grid container spacing={1}>
            <Grid xs={12}>
                <NavigationBar style={styleCenter}/>
            </Grid>-
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography variant="h6"> Pick Your Character:</Typography>
                </Box>
            </Grid>
            <Grid className={styles.cardContainer} xs={12}>
                {/*Character 1 card*/}
                <CharacterCard character={character1}/>
                <CharacterCard character={character2}/>
                <CharacterCard character={character3}/>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                    <Button onClick={() => {
                        getAPICharactersArray(setCharacter1)
                        getAPICharactersArray(setCharacter2)
                        getAPICharactersArray(setCharacter3)
                    }}
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
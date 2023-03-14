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
import Typography from "@mui/material/Typography";
import CharacterCard from "./CharacterCard";
import styles from './Card.module.css';
import getAPICharactersArray from "./ChoosingCharacter/getAPICharactersArray";
import {useSelector} from "react-redux";

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
    const characterName = useSelector((state) => state.character.character.name)
    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <NavigationBar style={styleCenter}/>
            </Grid>
            <Grid xs={12}>
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography variant="h6">
                        {characterName === undefined ? "Pick your character"
                            : `You picked ${characterName}`}
                    </Typography>
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
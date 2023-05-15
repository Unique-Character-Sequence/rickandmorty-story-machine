import React, {useEffect, useState} from 'react';
import RaM_portal_2 from '../assets/RaM_API_logo.png'
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import NavigationBar from "./NavigationBar/NavigationBar";
import Typography from "@mui/material/Typography";
import CharacterCard from "./CharacterCard";
import styles from './Card.module.css';
import getCharactersArray_API from "./ChoosingCharacter/getCharactersArray_API";
import {useSelector} from "react-redux";
import NavigationBar_Container from "./NavigationBar/NavigationBar_Container";
import ChoosingCharacterPage from "./ChoosingCharacter/ChoosingCharacterPage";
import ChoosingCharacterPage_Container from "./ChoosingCharacter/ChoosingCharacterPage_Container";

const MainPage = () => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};

    const characterName = useSelector((state) => state.character.characterObj.name)
    return (
        <div style={{margin: 0, padding: 0}}>
            <Grid container spacing={1}>
                <Grid xs={12}>
                    <NavigationBar_Container/>
                </Grid>
                <Grid xs={12}>
                    <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                        <Typography variant="h6">
                            {characterName === undefined ? "Pick your character"
                                : `You picked ${characterName}`}
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <ChoosingCharacterPage_Container/>
                </Grid>
                <Grid xs={12}>
                    <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                        <RouterLink to="/"><Button variant="outlined">Back</Button></RouterLink>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainPage;
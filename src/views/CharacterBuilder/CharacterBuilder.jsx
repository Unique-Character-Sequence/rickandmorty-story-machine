import React from 'react';
import Container from "@mui/material/Container";
import {CharacterCreator_Container} from "../CharacterCreator/CharacterCreator_Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CharacterBuilder = props => (
    <div>
        <Container maxWidth="lg" sx={{display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
            <Box sx={{flex: 1}}>
                <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt=""/>
                <Typography variant="h6">Allocate points</Typography>
                <CharacterCreator_Container/>
            </Box>
            <Box sx={{flex: 1}}>

            </Box>
        </Container>
    </div>
);

export default CharacterBuilder;
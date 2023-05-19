import React from 'react';
import Container from "@mui/material/Container";
import {CharacterCreator_Container} from "../CharacterCreator/CharacterCreator_Container";
import Typography from "@mui/material/Typography";

const CharacterBuilder = props => (
    <div>
        <Container maxWidth="md" sx={{backgroundColor: "#12312311"}}>
            <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt=""/>
            <Typography variant="h6">Allocate points</Typography>
            <CharacterCreator_Container/>
        </Container>
    </div>
);

export default CharacterBuilder;
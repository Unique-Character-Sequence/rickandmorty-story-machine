import React from 'react';
import Container from "@mui/material/Container";
import {CharacterCreator_Container} from "../CharacterCreator/CharacterCreator_Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import CharacterBonusCard from "./CharacterBonusCard";
import Stack from "@mui/material/Stack";

const CharacterBuilder = props => {
    const characterPicture = useSelector((state) => state.character.characterObj.imageUrl)
    return (
        <div>
            <Container maxWidth="lg" sx={{display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                <Box sx={{flex: 1}}>
                    <img src={characterPicture} alt=""/>
                    <Typography variant="h6">Allocate points</Typography>
                    <CharacterCreator_Container/>
                </Box>
                <Box sx={{flex: 1}}>
                    <Stack spacing={2}>
                        <CharacterBonusCard characterPicture={characterPicture}/>
                        <CharacterBonusCard characterPicture={characterPicture}/>
                        <CharacterBonusCard characterPicture={characterPicture}/>
                        <CharacterBonusCard characterPicture={characterPicture}/>
                    </Stack>
                </Box>
            </Container>
        </div>
    );
};

export default CharacterBuilder;
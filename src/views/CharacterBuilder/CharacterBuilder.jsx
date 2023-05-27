import React from 'react';
import Container from "@mui/material/Container";
import {CharacterCreator_Container} from "../CharacterCreator/CharacterCreator_Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import CharacterBonusCard from "./CharacterBonusCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./CharacterBuilder.module.css";
import {Link as RouterLink} from "react-router-dom";
import {setStage} from "../../redux/mainPage_Slice";

const CharacterBuilder = props => {
    const characterPicture = useSelector((state) => state.character.characterObj.imageUrl)

    const dispatch = useDispatch()

    const handleBackClick = (dispatch) => {
        dispatch(setStage(1))
    };

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
                    <div className={styles.buttonsContainer}>
                        <Button className={styles.button_Back} variant="contained"
                                onClick={() => {
                                    handleBackClick(dispatch)
                                }}
                        >Back</Button>
                        <RouterLink to="/app">
                            <Button className={styles.button_Next} variant="contained">Next</Button>
                        </RouterLink>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default CharacterBuilder;
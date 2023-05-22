import React from 'react';
import Box from "@mui/material/Box";
import styles from "../Card.module.css";
import CharacterCard from "../CharacterCard";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {height} from "@mui/system";

const ChoosingCharacterPage = (props) => {
    return (
        <Box sx={{marginTop: "8vh"}}>
            <Box className={styles.cardContainer}>
                <CharacterCard character={props.character1}/>
                <CharacterCard character={props.character2}/>
                <CharacterCard character={props.character3}/>
            </Box>
            <Box sx={{marginTop: "11vh", height: "10vh", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                <Box sx={{...props.styleCenter}}>
                    <Button sx={{width: "18vw"}} onClick={() => {
                        props.generateNewCharacters()
                    }}
                            variant="contained">Give me others!</Button>

                    <Button disabled={Object.keys(props.pickedCharacter).length === 0}
                            sx={{width: "18vw", height: "6vh", marginLeft: "3.5vw"}}
                            onClick={() => {
                                props.handleStageChange(2)
                            }}
                            variant="contained">Next</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ChoosingCharacterPage;
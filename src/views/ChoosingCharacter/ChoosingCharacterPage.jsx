import React from 'react';
import Box from "@mui/material/Box";
import styles from "../Card.module.css";
import CharacterCard from "../CharacterCard";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const ChoosingCharacterPage = (props) => {
    return (
        <Box sx={{marginTop: "5vh"}}>
            <Box className={styles.cardContainer}>
                <CharacterCard character={props.character1}/>
                <CharacterCard character={props.character2}/>
                <CharacterCard character={props.character3}/>
            </Box>
            <Box>
                <Box sx={{...props.styleCenter, marginTop: "1vw"}}>
                    <Button sx={{width: "18vw"}} onClick={() => {
                        props.generateNewCharacters()
                    }}
                            variant="outlined">Give me others!</Button>
                    {}
                    <Button sx={{width: "18vw", marginLeft: "1.5vw"}} onClick={() => {
                        props.handleStageChange(2)
                    }}
                             variant="contained">Next</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ChoosingCharacterPage;
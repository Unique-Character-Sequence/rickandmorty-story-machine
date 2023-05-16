import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import NavigationBar_Container from "../NavigationBar/NavigationBar_Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../Card.module.css";
import CharacterCard from "../CharacterCard";
import Button from "@mui/material/Button";
import getCharactersArray_API from "./getCharactersArray_API";
import Container from "@mui/material/Container";

const ChoosingCharacterPage = (props) => {
    return (
        <div>
            <div>
                <Box className={styles.cardContainer}>
                    <CharacterCard character={props.character1}/>
                    <CharacterCard character={props.character2}/>
                    <CharacterCard character={props.character3}/>
                </Box>
                <Box className={styles.cardContainer}>
                    {Object.keys(props.pickedCharacter).length !== 0 ?
                        <CharacterCard card_type="choose_stats" character={props.pickedCharacter}/> : ""}
                </Box>
                <Box>
                    <Box sx={{...props.styleCenter, marginTop: "1vw"}}>
                        <Button onClick={() => {
                            getCharactersArray_API(props.setCharacter1)
                            getCharactersArray_API(props.setCharacter2)
                            getCharactersArray_API(props.setCharacter3)
                        }}
                                variant="outlined">Generate</Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default ChoosingCharacterPage;
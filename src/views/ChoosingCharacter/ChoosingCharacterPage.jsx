import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import NavigationBar_Container from "../NavigationBar/NavigationBar_Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../Card.module.css";
import CharacterCard from "../CharacterCard";
import Button from "@mui/material/Button";
import getCharactersArray_API from "./getCharactersArray_API";

const ChoosingCharacterPage = (props) => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid className={styles.cardContainer} xs={12}>
                    <CharacterCard character={props.character1}/>
                    <CharacterCard character={props.character2}/>
                    <CharacterCard character={props.character3}/>
                </Grid>
                <Grid className={styles.cardContainer} xs={12}>
                    {Object.keys(props.pickedCharacter).length !== 0 ?
                        <CharacterCard card_type="choose_stats" character={props.pickedCharacter}/> : ""}
                </Grid>
                <Grid xs={12}>
                    <Box sx={{...props.styleCenter, backgroundColor: "#B6BCDE"}}>
                        <Button onClick={() => {
                            getCharactersArray_API(props.setCharacter1)
                            getCharactersArray_API(props.setCharacter2)
                            getCharactersArray_API(props.setCharacter3)
                        }}
                                variant="outlined">Generate</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ChoosingCharacterPage;
import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./Card.module.css";
import CharacterCard from "./CharacterCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CharacterSelection = (...props) => (
    <div>
        <Grid className={styles.cardContainer} xs={12}>
            {/*Character 1 card*/}
            <CharacterCard character={props.character1}/>
            <CharacterCard character={props.character2}/>
            <CharacterCard character={props.character3}/>
        </Grid>
        <Grid xs={12}>
            <Box sx={{...props.styleCenter, backgroundColor: "#B6BCDE"}}>
                <Button onClick={() => {
                    props.getAPICharactersArray(props.setCharacter1)
                    props.getAPICharactersArray(props.setCharacter2)
                    props.getAPICharactersArray(props.setCharacter3)
                }}
                        variant="outlined">Generate</Button>
            </Box>
        </Grid>
    </div>
);

export default CharacterSelection;
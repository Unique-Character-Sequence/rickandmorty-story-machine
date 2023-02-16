import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import styles from './Card.module.css'

const styleCenter = {display: "flex", justifyContent: "center", padding: "8px"}
const styleLeft = {display: "flex", justifyContent: "left", padding: "8px"}


const CharacterCard = (props) => {
    console.log("123", props.character)
    return (
        <Box className={styles.card}>
            <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                <Typography variant="h6">{props.character.name ? props.character.name : ""}</Typography>
            </Box>
            <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                <img src={props.character.imageUrl ? props.character.imageUrl : ""} alt=""/>
            </Box>

            <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                <Typography
                    variant="subtitle2">{props.character.location ? `Location: ${props.character.location}` : ""}</Typography>
            </Box>
            <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                <Typography
                    variant="subtitle2">{props.character.species ? `Species: ${props.character.species}` : ""}</Typography>
            </Box>
        </Box>
    );
};

export default CharacterCard;
import React from 'react';
import Box from "@mui/material/Box";
import styles from './Card.module.css'
import {toast} from 'react-toastify';
import {useDispatch} from "react-redux";
import {increment, setPlayerCharacter} from "../redux/character_Slice";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const styleCenter = {
    display: "flex", justifyContent: "center", padding: "8px", userSelect: "none", textAlign: "right"
}

const handleClick = (character, dispatch) => {
    toast.success(`You clicked ${character.name}`, {
        autoClose: 600,
        pauseOnHover: false,
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
    });
    dispatch(increment())

    dispatch(setPlayerCharacter(character))
}

const CharacterCard = (props) => {
    const dispatch = useDispatch()
    // console.log(props.character.id, props.character)
    return (
        <div className={props.style} key={props.character.id} onClick={() => handleClick(props.character, dispatch)}>
            <ThemeProvider theme={theme}>
                <Box className={styles.card}>
                    <Box sx={{...styleCenter, height: "4rem", alignItems: "center"}}>
                        <Typography variant="h6">{props.character.name ? props.character.name : ""}</Typography>
                    </Box>
                    <Box sx={styleCenter}>
                        <img src={props.character.imageUrl ? props.character.imageUrl : ""} alt=""/>
                    </Box>
                    <Box className={styles.textContainer}>
                        <Box sx={{...styleCenter, textAlign: "center"}}>
                            <Typography
                                variant="subtitle2">{props.character.location ? `Location: ${props.character.location}` : ""}</Typography>
                        </Box>
                        <Box sx={styleCenter}>
                            <Typography
                                variant="subtitle2">{props.character.species ? `Species: ${props.character.species}` : ""}</Typography>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default CharacterCard;
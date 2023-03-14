import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import styles from './Card.module.css'
import {toast} from 'react-toastify';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../redux/counterSlice";

const styleCenter = {display: "flex", justifyContent: "center", padding: "8px", userSelect: "none"}
const styleLeft = {display: "flex", justifyContent: "left", padding: "8px"}

const handleClickToast = (p, dispatch) => {
    toast.success(`You clicked ${p}`, {
        autoClose: 1500,
        position: toast.POSITION.TOP_RIGHT
    });
    dispatch(increment())
    // dispatch(setPlayerCharacter())
}

const CharacterCard = (props) => {
    const countNum = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log(props.character.id, props.character)
    return (
        <div key={props.character.id} onClick={() => handleClickToast(props.character.name, dispatch)}>
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
                <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                    <Typography
                        variant="subtitle2">{countNum !== undefined ? `Species: ${countNum}` : ""}</Typography>
                </Box>
            </Box>
        </div>
    );
};

export default CharacterCard;
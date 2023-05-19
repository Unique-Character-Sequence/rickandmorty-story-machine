import React from 'react';
import MainPage from "./MainPage";
import {useDispatch, useSelector} from "react-redux";
import {setStage} from "../../redux/mainPage_Slice";
import {useTheme} from "@mui/material/styles";
import ChoosingCharacterPage_Container from "../ChoosingCharacter/ChoosingCharacterPage_Container";
import CharacterCard from "../CharacterCard";
import styles from "../Card.module.css";
import Box from "@mui/material/Box";
import CharacterBuilder from "../CharacterBuilder/CharacterBuilder";

const MainPage_Container = () => {
    const stage = useSelector((state) => state.mainPage.stage);
    const styleCenter = {
        display: "flex", justifyContent: "center",
        padding: useTheme().spacing(), marginTop: useTheme().spacing(1)
    };
    const characterName = useSelector((state) => state.character.characterObj.name)
    const pickedCharacter = useSelector((state) => state.character.characterObj)
    const dispatch = useDispatch();
    const handleStageChange = (newStage) => {
        dispatch(setStage(newStage));
    };
    switch (stage) {
        case 1:
            return <MainPage
                characterName={characterName} styleCenter={styleCenter}
                stageComponent={<ChoosingCharacterPage_Container/>}
            />;
        case 2:
            return <MainPage
                characterName={characterName} styleCenter={styleCenter}
                stageComponent={<CharacterBuilder/>}
            />;
        // Add more cases for different stages...
        default:
            return <MainPage
                characterName={characterName} styleCenter={styleCenter}
                stageComponent={<ChoosingCharacterPage_Container/>}
            />;
    }
};

export default MainPage_Container;
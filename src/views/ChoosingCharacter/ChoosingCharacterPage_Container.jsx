import {useEffect, useState} from "react";
import getCharactersArray_API from "./getCharactersArray_API";
import {useDispatch, useSelector} from "react-redux";
import ChoosingCharacterPage from "./ChoosingCharacterPage";
import {useTheme} from "@mui/material/styles";
import {setStage} from "../../redux/mainPage_Slice";

const ChoosingCharacterPageContainer = () => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};
    const [character1, setCharacter1] = useState({});
    const [character2, setCharacter2] = useState({});
    const [character3, setCharacter3] = useState({});
    const generateNewCharacters = () => {
        getCharactersArray_API(setCharacter1)
        getCharactersArray_API(setCharacter2)
        getCharactersArray_API(setCharacter3)
    }

    useEffect(() => {
        generateNewCharacters()
    }, []);
    const pickedCharacter = useSelector((state) => state.character.characterObj)
    const dispatch = useDispatch();
    const handleStageChange = (newStage) => {
        dispatch(setStage(newStage));
    };
    return (
        <ChoosingCharacterPage
            handleStageChange={handleStageChange}
            generateNewCharacters={generateNewCharacters}
            styleCenter={styleCenter}
            pickedCharacter={pickedCharacter}
            character1={character1}
            character2={character2}
            character3={character3}/>
    );
};

export default ChoosingCharacterPageContainer;
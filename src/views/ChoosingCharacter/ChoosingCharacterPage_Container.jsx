import {useEffect, useState} from "react";
import getCharactersArray_API from "./getCharactersArray_API";
import {useSelector} from "react-redux";
import ChoosingCharacterPage from "./ChoosingCharacterPage";
import {useTheme} from "@mui/material/styles";

const ChoosingCharacterPageContainer = props => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};
    const [character1, setCharacter1] = useState({});
    const [character2, setCharacter2] = useState({});
    const [character3, setCharacter3] = useState({});

    useEffect(() => {
        // Call the fetchImage function and pass the setImageUrl callback
        getCharactersArray_API(setCharacter1);
        getCharactersArray_API(setCharacter2);
        getCharactersArray_API(setCharacter3);
    }, []);
    const pickedCharacter = useSelector((state) => state.character.characterObj)

    return (
        <ChoosingCharacterPage
            styleCenter={styleCenter}
            pickedCharacter={pickedCharacter}
            character1={character1}
            setCharacter1={setCharacter1}
            character2={character2}
            setCharacter2={setCharacter2}
            character3={character3}
            setCharacter3={setCharacter3}/>
    );
};

export default ChoosingCharacterPageContainer;
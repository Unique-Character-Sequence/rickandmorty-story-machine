import React from 'react';
import {useSelector} from "react-redux";
import NavigationBar from "./NavigationBar";
import RaM_portal_2 from "../../assets/RaM_API_logo.png";

const NavigationBarContainer = () => {
    const pickedCharacter = useSelector((state) => state.character.characterObj)
    return (
        <div>
            <NavigationBar userPfp={pickedCharacter.imageUrl} img1={RaM_portal_2}/>
        </div>
    );
};

export default NavigationBarContainer;
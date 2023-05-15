import {useState} from "react";
import {CharacterCreator} from "./CharacterCreator";
import {getPointCost} from "../../utils/getPointCost";

export const CharacterCreator_Container = () => {
    const [race, setRace] = useState("");
    const [pointsSpent , setPointsSpent] = useState(0);
    const [gameClass, setGameClass] = useState("");
    const [constitution, setConstitution] = useState(10);
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [charisma, setCharisma] = useState(10);
    const [wisdom, setWisdom] = useState(10);

    const handleClassChange = (e) => {
        setGameClass(e.target.value);
    };

    const handleAttributeChange = (attribute, value) => {
        console.log(getPointCost(12))

        const statLimitCheck = (stat, value) =>
            (stat + value >= 3 && stat + value <= 18) ? stat + value : stat;
        switch (attribute) {
            case "con":
                setConstitution(statLimitCheck(constitution, value));
                break;
            case "str":
                setStrength(statLimitCheck(strength, value));
                break;
            case "dex":
                setDexterity(statLimitCheck(dexterity, value));
                break;
            case "int":
                setIntelligence(statLimitCheck(intelligence, value));
                break;
            case "cha":
                setCharisma(statLimitCheck(charisma, value));
                break;
            case "wis":
                setWisdom(statLimitCheck(wisdom, value));
                break;
            default:
                break;
        }
    };

    return (
        <CharacterCreator
            constitution={constitution}
            strength={strength}
            dexterity={dexterity}
            intelligence={intelligence}
            charisma={charisma}
            wisdom={wisdom}
            gameClass={gameClass}
            handleClassChange={handleClassChange}
            handleAttributeChange={handleAttributeChange}/>
    );
};

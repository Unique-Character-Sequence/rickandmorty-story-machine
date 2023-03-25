import {useState} from "react";

export const CharacterCreator = () => {
    const [race, setRace] = useState("");
    const [classType, setClassType] = useState("");
    const [constitution, setConstitution] = useState(10);
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [charisma, setCharisma] = useState(10);
    const [wisdom, setWisdom] = useState(10);

    const handleClassChange = (e) => {
        setClassType(e.target.value);
    };


    const handleAttributeChange = (attribute, value) => {
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
        <div>
            <label>
                Class:
                <select value={classType} onChange={handleClassChange}>
                    <option value="">Select a class</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Wizard">Wizard</option>
                </select>
            </label>
            <br/>
            <label>
                Constitution: {constitution}{" "}
                <span>
          <button onClick={() => handleAttributeChange("con", 1)}>+</button>
          <button onClick={() => handleAttributeChange("con", -1)}>-</button>
        </span>
            </label>
            <br/>
            <label>
                Strength: {strength}{" "}
                <span>
          <button onClick={() => handleAttributeChange("str", 1)}>+</button>
          <button onClick={() => handleAttributeChange("str", -1)}>-</button>
        </span>
            </label>
            <br/>
            <label>
                Dexterity: {dexterity}{" "}
                <span>
          <button onClick={() => handleAttributeChange("dex", 1)}>+</button>
          <button onClick={() => handleAttributeChange("dex", -1)}>-</button>
        </span>
            </label>
            <br/>
            <label>
                Intelligence: {intelligence}{" "}
                <span>
          <button onClick={() => handleAttributeChange("int", 1)}>+</button>
          <button onClick={() => handleAttributeChange("int", -1)}>-</button>
        </span>
            </label>
            <br/>
            <label>
                Charisma: {charisma}{" "}
                <span>
          <button onClick={() => handleAttributeChange("cha", 1)}>+</button>
          <button onClick={() => handleAttributeChange("cha", -1)}>-</button>
        </span>
            </label>
            <br/>
            <label>
                Wisdom: {wisdom}{" "}
                <span>
          <button onClick={() => handleAttributeChange("wis", 1)}>+</button>
          <button onClick={() => handleAttributeChange("wis", -1)}>-</button>
        </span>
            </label>
            <br/>
        </div>
    );
};
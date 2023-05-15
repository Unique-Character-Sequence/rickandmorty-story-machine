import AbilityScore from "./AbilityScore";

export const CharacterCreator = (props) => {
    return (
        <div>
            <label>
                Class:
                <select value={props.gameClass} onChange={props.handleClassChange}>
                    <option value="">Select a class</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Wizard">Wizard</option>
                </select>
            </label>
            <AbilityScore
                label="Constitution"
                value={props.constitution}
                attribute="con"
                handleAttributeChange={props.handleAttributeChange}
            />
            <AbilityScore
                label="Strength"
                value={props.strength}
                attribute="str"
                handleAttributeChange={props.handleAttributeChange}
            />
            <AbilityScore
                label="Dexterity"
                value={props.dexterity}
                attribute="dex"
                handleAttributeChange={props.handleAttributeChange}
            />
            <AbilityScore
                label="Intelligence"
                value={props.intelligence}
                attribute="int"
                handleAttributeChange={props.handleAttributeChange}
            />
            <AbilityScore
                label="Charisma"
                value={props.charisma}
                attribute="cha"
                handleAttributeChange={props.handleAttributeChange}
            />
            <AbilityScore
                label="Wisdom"
                value={props.wisdom}
                attribute="wis"
                handleAttributeChange={props.handleAttributeChange}
            />
        </div>
    );
};
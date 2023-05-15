const AbilityScore = (props) => {
    return (
        <div>
            <label>
                {props.label}: {props.value}{" "}
                <span>
                    <button onClick={() => props.handleAttributeChange(props.attribute, 1)}>+</button>
                    <button onClick={() => props.handleAttributeChange(props.attribute, -1)}>-</button>
                </span>
            </label>
        </div>
    );
};

export default AbilityScore;
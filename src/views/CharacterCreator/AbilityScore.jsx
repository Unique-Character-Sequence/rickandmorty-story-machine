import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AbilityScore = (props) => {
    return (
        <div>
            <Box sx={{float: "left", height: "60.5px", width: "200px",
                backgroundColor: "#12312312"}}>
                <Typography sx={{ marginTop: "10%"}}>
                    {`${props.label}: ${props.value} `}
                </Typography>
            </Box>
            <ButtonGroup orientation="vertical" size="small" variant="outlined">
                <Button
                    onClick={() => props.handleAttributeChange(props.attribute, 1)}>+</Button>
                <Button
                    onClick={() => props.handleAttributeChange(props.attribute, -1)}>-</Button>
            </ButtonGroup>
        </div>
    );
};

export default AbilityScore;
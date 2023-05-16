import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import NavigationBar_Container from "./NavigationBar/NavigationBar_Container";
import ChoosingCharacterPage_Container from "./ChoosingCharacter/ChoosingCharacterPage_Container";

const MainPage = () => {
    const styleCenter = {display: "flex", justifyContent: "center", padding: useTheme().spacing()};

    const characterName = useSelector((state) => state.character.characterObj.name)
    return (
        <Box sx={{maxWidth: "auto", margin: 0, padding: 0}}>
            <Box>
                <Box>
                    <NavigationBar_Container/>
                </Box>
                <Box>
                    <Box sx={{...styleCenter, backgroundColor: "#118CAF"}}>
                        <Typography variant="h6">
                            {characterName === undefined ? "Pick your character"
                                : `You picked ${characterName}`}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <ChoosingCharacterPage_Container/>
                </Box>
                <Box>
                    <Box sx={{...styleCenter, backgroundColor: "#B6BCDE"}}>
                        <RouterLink to="/"><Button variant="outlined">Back</Button></RouterLink>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainPage;
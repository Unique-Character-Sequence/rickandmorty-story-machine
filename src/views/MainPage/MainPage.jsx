import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavigationBar_Container from "../NavigationBar/NavigationBar_Container";
import RaM_wallpaper from "../../assets/RaM_wallpaper.jpg";

const MainPage = (props) => {
    // backgroundImage: `url(${RaM_wallpaper})`
    return (
        <Box sx={{maxWidth: "auto", height: "100vh", backgroundSize: "cover",
            }}>
            <Box>
                <Box>
                    <NavigationBar_Container/>
                </Box>
                <Box>
                    {/*<img src={RaM_wallpaper} alt=""/>*/}
                    <Box sx={{...props.styleCenter, backgroundColor: "#118CAF"}}>
                        <Typography variant="h6">
                            {props.characterName === undefined ? "Pick your character"
                                : `You picked ${props.characterName}`}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    {props.stageComponent}
                </Box>
            </Box>
        </Box>
    );
};

export default MainPage;
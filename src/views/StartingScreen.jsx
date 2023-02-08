import logo from "../assets/RaM_portal.png";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {Link as RouterLink} from "react-router-dom";

const StartingScreen = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p align="center">
                    <Typography variant="h3">Время для Рика и Морти, бро!</Typography>
                    <Typography variant="h5">Oh, jeez...</Typography>
                </p>
                <RouterLink to="/app"><Button variant="outlined">Let's start the adventure!</Button></RouterLink>
                <Link
                    rel="noopener"
                    href="https://reactjs.org"
                >React документация</Link>
            </header>
        </div>
    );
};

export default StartingScreen;
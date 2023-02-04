import logo from "../assets/RaM_portal.png";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const StartingScreen = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p align="center">
                    <Typography variant="h3">Время для Рика и Морти, бро!</Typography>
                    <Typography variant="h5">Oh, jeez...</Typography>
                </p>
                <Button variant="outlined">Let's start the adventure!</Button>
                <Link

                    rel="noopener"
                    href="https://reactjs.org"
                >React документация</Link>
            </header>
        </div>
    );
};

export default StartingScreen;
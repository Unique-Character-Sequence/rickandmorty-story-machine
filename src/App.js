import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./views/MainPage";
import StartingScreen from "./views/StartingScreen";
import {ToastContainer, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <>
        <head>
            <title>qe</title>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <link
                target="_blank"
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </head>
        <ToastContainer
            transition={Flip}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            limit={5}/>
        <Routes>
            <Route exact path="/" element={<StartingScreen/>}/>
            <Route path="/app" element={<MainPage/>}/>
        </Routes>
    </>
);


export default App;
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./views/MainPage/MainPage";
import StartingScreen from "./views/StartingScreen";
import {ToastContainer, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainPage_Container from "./views/MainPage/MainPage_Container";

const App = () => (
    <div>
        <ToastContainer
            transition={Flip}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            limit={5}/>
        <Routes>
            <Route exact path="/" element={<StartingScreen/>}/>
            <Route path="/app" element={<MainPage_Container/>}/>
        </Routes>
    </div>
);


export default App;
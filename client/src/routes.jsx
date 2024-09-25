import Middle from "./components/Middle";
import GoogleStreet from "./components/GoogleStreet";
import { Login } from './components/Login/index.tsx';
import {PromptForNewRankOrLocation} from "./components/PromptForNewRankOrLocation/index.tsx";
import Leaderboard from "./components/Leaderboard/index.tsx";


const routes = [
    {
        name: "Login Page",
        route: "LoginPage",
        component: <Login />,
    },
    {
        name: "Main Page",
        route: "MainPage",
        component: <Middle/>,
    },
    {
        type: "collapse",
        name: "Leaderboard",
        route: "Leaderboard",
        component: <Leaderboard />,
    },
    {
        name: "Change Language",
        key: "change-language",
        route: "changeLanguage",
    },
    {
        name: "Game",
        type: "no-sidenav",
        key: "game",
        route: "game",
        component: <GoogleStreet />,
    },
    {
        name: "endGame",
        type: "no-sidenav",
        key: "endGame",
        route: "endGame",
        component: <PromptForNewRankOrLocation />,
    }

];

export const getRoutes = () => {
    return routes;
}
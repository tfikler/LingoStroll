import Middle from "./components/Middle";
import GoogleStreet from "./components/GoogleStreet";
import {PromptForNewRankOrLocation} from "./components/PromptForNewRankOrLocation/index.tsx";


const routes = [
    {
        name: "Main Page",
        route: "MainPage",
        component: <Middle />,
    },
    {
        type: "collapse",
        name: "Leaderboard",
        route: "Leaderboard",
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
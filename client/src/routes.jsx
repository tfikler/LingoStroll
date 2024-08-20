import Middle from "./components/Middle";
import GoogleStreet from "./components/GoogleStreet";


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
    }

];

export const getRoutes = () => {
    return routes;
}
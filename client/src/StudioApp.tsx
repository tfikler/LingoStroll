import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { getRoutes } from "./routes";
// @ts-ignore
import AppLayout from "./AppLayout.tsx";

export default function StudioApp() {
    const renderRoutes = (allRoutes: any[]) => {
        const renderedRoutes: any[] = [];
        allRoutes.map((route) => {
            if (route.route) {
                renderedRoutes.push(
                    <Route path={`${route.route}`} element={route.component} key={route.key} />
                );
            }

            return null;
        });
        return renderedRoutes;
    };

    const appRoutes = getRoutes();
    const defaultRoute = appRoutes[0].route;

    return (
    <>
        <AppLayout appRoutes={appRoutes}>
            <Routes>
                {renderRoutes(appRoutes)}
                <Route path={"/"} element={<Navigate to={defaultRoute} />} key={"defaultRoute"} />
            </Routes>
        </AppLayout>
    </>
    )
}
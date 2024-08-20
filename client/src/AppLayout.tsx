import React, { Fragment } from 'react'
import TopNavBar from "./components/TopNavBar";
import Middle from "./components/Middle";

import { getRoutes } from "./routes";

import { styled } from "@mui/material/styles";


export default function AppLayout({ appRoutes, children }: { appRoutes: any[]; children: React.ReactNode }) {

    const LayoutMain = styled("div")(({ theme }) => ({
        display: "grid",
        gridTemplateColumns: "350px 1fr 350px", // Adjust the width of left and right navbars
        gridTemplateRows: "auto 1fr",
        width: '100%',
        height: "100vh",
    }));

    const LayoutTopBar = styled("div")(({ theme }) => ({
        gridColumn: "1 / -1", // Span the top bar across all columns
    }));

    const LayoutLeftNavBar = styled("div")(({ theme }) => ({
        gridColumn: "1 / 2",
        backgroundColor: "rgba(217, 217, 217, 0.7)", // Example background color
        color: "#fff",
        padding: theme.spacing(2),
        // Add other styles for the left navbar
    }));

    const LayoutContent = styled("div")(({ theme }) => ({
        gridColumn: "2 / 3",
        overflowY: "auto",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    }));

    const LayoutRightNavBar = styled("div")(({ theme }) => ({
        gridColumn: "3 / 4",
        backgroundColor: "rgba(217, 217, 217, 0.7)", // Example background color
        color: "#fff",
        padding: theme.spacing(2),
        // Add other styles for the right navbar
    }));

    const routes = getRoutes();

    return (
        <LayoutMain>
            <LayoutTopBar>
                <TopNavBar routes={routes}/>
            </LayoutTopBar>
            <LayoutLeftNavBar>
                {/* Content for Left Navbar */}
            </LayoutLeftNavBar>
            <LayoutContent>{children}</LayoutContent>
            <LayoutRightNavBar>
                {/* Content for Right Navbar */}
            </LayoutRightNavBar>
        </LayoutMain>
    );
}
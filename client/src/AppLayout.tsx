import React, { Fragment } from 'react'
import TopNavBar from "./components/TopNavBar";
import Middle from "./components/Middle";

import { styled } from "@mui/material/styles";


export default function AppLayout({ appRoutes, children }: { appRoutes: any[]; children: React.ReactNode }) {

  // const LayoutTopBar = styled("div")(({ theme }) => ({
  //   gridColumn: "2 / -1",
  // }));

  const LayoutMain = styled("div")(({ theme }) => ({
    // gridTemplateColumns: `auto 1fr`,
    // gridTemplateRows: "auto 1fr",
      width: '100%',
    height: "100vh",
  }));

    const LayoutContent = styled("div")(({ theme }) => ({
        // gridColumn: "2 / -1",
        // overflowY: "auto",
        // paddingLeft: theme.spacing(3),
        // paddingRight: theme.spacing(3),
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(1),
    }));

  return (
      <LayoutMain>
        {/*<LayoutTopBar>*/}
          <TopNavBar/>
            <LayoutContent>
                <Middle/>
            </LayoutContent>
        {/*</LayoutTopBar>*/}
      </LayoutMain>
  )
}
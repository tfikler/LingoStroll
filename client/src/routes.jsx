import Icon from "@mui/material/Icon";

const routes = [
    {
        type: "collapse",
        name: "Talk to agent",
        key: "talk-to-agent",
        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#F347A4" }}>
                    chat
                </Icon>
            ),
        },
        route: "talk-to-agent",
    },
    {
        name: "Customer Portal",
        key: "customer-portal",
        route: "customer-portal",
    },
    {
        type: "collapse",
        name: "Flows",
        key: "flows",
        title: "Flows",
        route: "flows",

        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#41b49f" }}>
                    account_tree
                </Icon>
            ),
            flowIcon: (
                <Icon fontSize="small" style={{ color: "#4184b4" }}>
                    account_tree
                </Icon>
            ),
        },
    },
    {
        name: "New B2C Flow",
        key: "new-b2c-flow",
        route: "create-b2c-flow",
        permission: "create-b2c-flow",
    },
    // /**
    {
        type: "collapse",
        name: "New Flow",
        key: "new-flow",
        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#F347A4" }}>
                    add_circle_outline
                </Icon>
            ),
        },
        route: "new-flow",
        permission: "create-flow",
    },
    // **/
    {
        type: "collapse",
        name: "Call History",
        key: "call-history",
        title: "Call History",
        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#F08F1C" }}>
                    content_paste
                </Icon>
            ),
        },
        route: "call-history",
    },
    {
        type: "collapse",
        name: "Create Digital Twin",
        key: "create-your-avatar",
        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#FFDB5E" }}>
                    person_outline_outlined
                </Icon>
            ),
        },
        route: "create-your-avatar",
    },
    {
        type: "no-sidenav",
        name: "Settings",
        key: "settings",
        title: "Settings",
        icons: {
            icon: (
                <Icon fontSize="small" style={{ color: "#5D5FEF" }}>
                    settings
                </Icon>
            ),
        },
        route: "settings",
    },
];

export const getRoutes = () => {
    return routes;
}
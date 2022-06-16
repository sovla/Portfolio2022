import React, { useCallback } from "react";
import styled from "styled-components";
import NavigationIcon from "@mui/icons-material/Navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Fab } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { DrawerProps } from "@mui/material/Drawer";
import { useRouter } from "next/router";

const Menu = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const router = useRouter();

    const toggleDrawer =
        (anchor: DrawerProps["anchor"], open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                anchor == null &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor as string]: open });
        };

    const onClickItem = useCallback((index: number) => {
        switch (index) {
            case 0:
                router.push("./");
                break;
            case 1:
                router.push("./aboutme");
                break;
            case 2:
                router.push("./project");
                break;
            case 3:
                router.push("./contact");
                break;

            default:
                break;
        }
    }, []);
    const list = useCallback(
        (anchor: DrawerProps["anchor"]) => (
            <Box
                sx={{
                    width:
                        anchor === "top" || anchor === "bottom" ? "auto" : 250,
                }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {["Intro", "About-Me", "Project", "Contact"].map(
                        (text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => onClickItem(index)}
                                >
                                    <ListItemIcon>
                                        {index === 0 && <FirstPageIcon />}
                                        {index === 1 && <AccountBoxIcon />}
                                        {index === 2 && <AppsIcon />}
                                        {index === 3 && <ContactMailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
        ),
        []
    );
    return (
        <MenuContainer>
            <Fab variant="extended" onClick={toggleDrawer("top", true)}>
                <ListIcon />
            </Fab>
            <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
            >
                {list("top")}
            </Drawer>
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
    position: fixed;
    right: 10%;
    top: 10%;
`;

export default Menu;

import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    "&:hover": {
        color: "green",
        borderBottom: "1px solid white",
    },
}))

const drawerWidth = 280;

const DrawerBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { isAuth, logOut } = useAuth();
    const navigate = useNavigate();

    const bigLogOut = () => {
        setOpenDrawer(false);
        logOut();
    };

    const goHome = () => {
        setOpenDrawer(false);
        navigate("/landing");
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} variant="temporary" anchor="left" sx={{
                justifyContent: "center", '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    // boxSizing: 'border-box',
                    justifyContent: 'center'
                },
            }}>
                <List disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/">Home</StyledLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/write-post">Write</StyledLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <StyledLink to="/my-posts">MyPosts</StyledLink>
                        </ListItemText>
                    </ListItem>
                    <Divider />


                    {!isAuth ? (
                        <>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <StyledLink to="/login">Login</StyledLink>
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <StyledLink to="/register">Register</StyledLink>
                                </ListItemText>
                            </ListItem>
                        </>
                    ) : (
                        <ListItem >
                            <ListItemText>
                                <StyledLink onClick={() => bigLogOut()} to="/landing">Logout</StyledLink>
                            </ListItemText>
                        </ListItem>
                    )}



                    <Divider />
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuIcon />
            </IconButton>
            <Typography onClick={() => goHome()} variant="h4" sx={{ ml: "15px", cursor: "pointer" }}>
                BetterBlog
            </Typography>
        </>
    )
};

export default DrawerBar;
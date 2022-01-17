// MUI
import { AppBar, Toolbar, Typography, Grid, styled, useMediaQuery, useTheme } from '@mui/material';
// router
import { Link, useNavigate } from 'react-router-dom';
// components
import DrawerBar from './Drawer';
// hooks
import useAuth from 'src/hooks/useAuth';

// ------------------------------------------------------------------------------

const StyledNavLink = styled("div")(({ theme }) => ({
    // marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginRight: theme.spacing(10),
    paddingTop: "1px",


    "&:hover": {
        color: "yellow",
        // borderBottom: "1px solid white",
    },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    // flexGrow: "0.5",
    cursor: "pointer"
}))

// ------------------------------------------------------------------------------

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { isAuth, logOut } = useAuth();
    const navigate = useNavigate();

    return (
        <AppBar position='static' sx={{ justifyContent: "center", alignItems: "stretch", width: '100%', height: '5rem', backgroundColor: "black" }}>
            <Toolbar>
                {isMobile ? <DrawerBar /> : (

                    <Grid container sx={{ alignItems: 'stretch' }}>
                        <Grid item sm={2}>
                            <StyledTypography onClick={() => navigate("/landing")} itemType="button" variant="h4">
                                BetterBlog
                            </StyledTypography>
                        </Grid>
                        <Grid item sx={{ display: "flex", justifyContent: 'center', alignItems: 'right' }} >
                            <StyledLink to='/landing'>
                                Home
                            </StyledLink>


                            <StyledLink to='/write-post'>
                                Write
                            </StyledLink>


                            <StyledLink to='/my-posts'>
                                MyPosts
                            </StyledLink>

                            {!isAuth ? (
                                <>
                                    <StyledLink to='/login'>
                                        Login
                                    </StyledLink>


                                    <StyledLink to='/register'>
                                        Register
                                    </StyledLink>
                                </>
                            ) : (
                                <StyledLink onClick={() => logOut()} to='/landing'>
                                    Logout
                                </StyledLink>
                            )}

                        </Grid>
                    </Grid>

                )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar


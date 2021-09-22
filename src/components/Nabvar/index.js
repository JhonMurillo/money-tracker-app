import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Link
} from "react-router-dom";

import { Context } from '../../Context'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export const Nabvar = () => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(false);
    const [menuEl, setMenuEl] = useState(null);
    const [openProfile, setOpenProfile] = useState(false);
    const [profileEl, setProfileEl] = useState(null);

    const { isAuth, removeAuth, userLogged } = useContext(Context)

    const toggleMenu = (event) => {
        setOpenMenu(!openMenu);
        setMenuEl(!openMenu ? event.currentTarget : null);
    };

    const toggleProfile = (event) => {
        setOpenProfile(!openProfile);
        setProfileEl(!openProfile ? event.currentTarget : null);
    };

    const authSection = () => {
        return (
            <>
                <div id='Menu'>
                    <IconButton
                        aria-label='account of current user'
                        aria-controls='Menu'
                        aria-haspopup={true}
                        aria-owns={openMenu ? 'Menu' : null}
                        onClick={toggleMenu}
                        color='inherit'
                    >
                        <MenuIcon />
                        {/* <Avatar alt="Profile image" src="/static/images/avatar/1.jpg" /> */}
                        <ArrowDropDownIcon />
                    </IconButton>

                    <Menu
                        id='Menu'
                        anchorEl={menuEl}
                        keepMounted
                        open={openMenu}
                        onClose={toggleMenu}
                        PaperProps={{
                            style: {
                                transform: 'translateX(10px) translateY(30px)',
                            }
                        }}
                    >
                        <MenuItem component={Link} to={'/dashboard'} onClick={toggleMenu}>
                            Dashboard
                        </MenuItem>
                        <MenuItem component={Link} to={'/outgoings'} onClick={toggleMenu}>
                            Outgoings
                        </MenuItem>
                        <MenuItem component={Link} to={'/add-outgoing'} onClick={toggleMenu}>
                            Create new outgoing
                        </MenuItem>
                    </Menu>

                </div>

                <div id='profile'>
                    <IconButton
                        aria-label='account of current user'
                        aria-controls='profile'
                        aria-haspopup={true}
                        aria-owns={openProfile ? 'profile' : null}
                        onClick={toggleProfile}
                        color='inherit'
                    >
                        <AccountCircle />
                        <ArrowDropDownIcon />
                    </IconButton>

                    <Menu
                        id='profile'
                        anchorEl={profileEl}
                        keepMounted
                        open={openProfile}
                        onClose={toggleProfile}
                        PaperProps={{
                            style: {
                                transform: 'translateX(10px) translateY(30px)',
                            }
                        }}
                    >

                        <MenuItem onClick={toggleProfile} disabled={true}>
                            Sign in as:
                            {userLogged?.user?.name}
                        </MenuItem>
                        <MenuItem component={Link} to={'/profile'} onClick={toggleProfile}>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={() => { removeAuth() }}>Logout</MenuItem>
                    </Menu>

                </div>
            </>
        )
    }

    const anonymousSection = () => {
        return (
            <div>
                <Button component={Link} to={'/signup'} color='inherit'>
                    Sign up
                </Button>
                <Button component={Link} to={'/login'} color='inherit'>
                    Login
                </Button>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Button component={Link} to={'/login'} color='inherit'  className={classes.title}>
                        <Typography variant='h6'>
                            Money Tracker
                        </Typography>
                    </Button>

                    {
                        !isAuth && anonymousSection()
                    }

                    {
                        isAuth && authSection()
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}

import { Box, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText, Button, Collapse, Menu, MenuItem, Avatar } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import dashboardIcon from '../assets/dashboard.png'
import chatIcon from '../assets/chat.png'
import postIcon from '../assets/post.png'
import userIcon from '../assets/users.png'
import profileIcon from '../assets/profile.png'
import quoteIcon from '../assets/quotes.png'
import Logo from '../assets/shape.png'
import useSignout from '../hooks/use-signout';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const menuItems = [
    {
        "id": 1,
        "menu_name": "Dashboard",
        "menu_alias_name": "Dashboard",
        "menu_link": "/",
        "menu_icon": dashboardIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 2,
        "menu_name": "Quotes",
        "menu_alias_name": "Quotes",
        "menu_link": "/quotes",
        "menu_icon": quoteIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 3,
        "menu_name": "Users",
        "menu_alias_name": "Users",
        "menu_link": "/users",
        "menu_icon": userIcon,
        "is_active": true,
        "sub_menu": [],
    },
    {
        "id": 4,
        "menu_name": "Post",
        "menu_alias_name": "Post",
        "menu_link": "/post",
        "menu_icon": postIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 5,
        "menu_name": "Chat",
        "menu_alias_name": "Chat",
        "menu_link": "/chat",
        "menu_icon": chatIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 5,
        "menu_name": "Profile",
        "menu_alias_name": "Profile",
        "menu_link": "/profile",
        "menu_icon": profileIcon,
        "is_active": true,
        "sub_menu": []
    },
]

const linkStyles = {
    "& svg": { fill: "#fff" },
    bgcolor: "primary.main",
    color: "text.title",
    "&:hover": { bgcolor: "primary.main" },
    "& .MuiListItemText-primary": {
        color: "#fff",
        // fontWeight: 600
    },
    "& .MuiListItemIcon-root .nav-icon": {
        backgroundColor: '#fff'
    },
    "& .MuiListItemIcon-root p": {
        color: "#fff",
        fontWeight: 600
    }
}

const childLinkStyles = {
    position: 'relative',
    '&:before': {
        position: 'absolute',
        content: '""',
        height: 'calc(100% - 20px)',
        left: 35,
        top: 0,
        borderRight: '1px dashed',
        zIndex: 1,
        borderColor: "#c3c3c3"
    },
    "& .MuiListItemText-primary": {
        color: "text.secondary"
    },
    ".MuiListItemButton-root": {
        position: "relative",
        "&:before": {
            content: "''",
            position: "absolute",
            width: "15px",
            left: 13,
            borderTop: '1px dashed',
            borderColor: "#c3c3c3"
        }
    },
    "& .active > .MuiListItemButton-root .MuiListItemText-primary": {
        color: "primary.main",
        fontWeight: 600
    },
    "& .active > .MuiListItemButton-root:before": {
        borderColor: "primary.main"
    }
}

const ListMenu = ({ menuItem, open }) => {

    const [isViewed, setIsViewed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
        if (open) {
            setIsViewed(!isViewed)
            setAnchorEl(null)
        } else {
            setAnchorEl(e.currentTarget)
        }
    };

    return (

        <>
            {menuItem.sub_menu?.length ?
                <>
                    <Box id={menuItem.menu_link} className={'parent-nav'}>
                        <Box className='menu-head' sx={{ px: open ? 1.5 : 1 }}>
                            <ListItemButton onClick={(e) => { handleClick(e) }} sx={{ pt: 1.2, pb: open ? 1.2 : .8, borderRadius: '6px', mb: open ? .8 : .4, px: open ? 1.5 : .8, '&:hover': { backgroundColor: 'background.light' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 1.5 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                    <Box className="nav-icon" sx={{ height: 18, width: 18, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: 'primary.main' }} alt="" />
                                    {!open && <Typography variant="body1" sx={{ fontSize: 10, mt: .8 }} color="#000">{menuItem.menu_alias_name}</Typography>}
                                </ListItemIcon>
                                <ListItemText primary={menuItem.menu_alias_name} sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }} />
                                {open && <>
                                    {isViewed ? <ExpandLess /> : <ExpandMore />}
                                </>}
                            </ListItemButton>
                        </Box>
                        <Collapse in={isViewed && open} timeout="auto">
                            <List component="div" disablePadding sx={{ ...childLinkStyles, pl: 3 }} >
                                {
                                    menuItem.sub_menu.map((item, index) => (
                                        <NavLink key={index} to={`${menuItem.menu_link}${item.menu_link}`}>
                                            <ListItemButton disableRipple sx={{ pl: 4, '&:hover': { backgroundColor: 'transparent' } }}>
                                                <ListItemText primary={item.menu_alias_name} />
                                            </ListItemButton>
                                        </NavLink>
                                    ))
                                }
                            </List>
                        </Collapse>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => { setAnchorEl(null) }}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    mt: .5,
                                    bgcolor: 'background.sidebar',
                                    minWidth: 100,
                                    width: 'auto',
                                    border: '1px solid',
                                    borderColor: 'background.light',
                                    borderRadius: 1.5,
                                    "&  .active li::after": { bgcolor: "#fff" },
                                    "&  .active li p": { color: "#fff" }
                                },
                            }}>
                            {menuItem.sub_menu.map((item, index) => (
                                <NavLink key={index} style={{ textDecoration: "none" }} to={`${menuItem.menu_link}${item.menu_link}`} >
                                    <MenuItem disableRipple sx={{ pl: 3, position: "relative", "&:after": { content: "''", position: "absolute", width: 5, height: 5, borderRadius: 10, left: 8, background: '#ffffff80' }, }} onClick={() => { setAnchorEl(null) }}>
                                        <Typography variant="body1" color="text.default">{item.menu_alias_name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                </>
                :
                <NavLink to={menuItem.menu_link} className={"parent-nav"}>
                    <ListItemButton sx={{ minHeight: 0, py: 1.2, justifyContent: open ? 'initial' : 'center', px: 1.5, mx: open ? 1.5 : 1, mb: open ? .8 : .4, borderRadius: '6px', '&:hover': { backgroundColor: 'background.light' } }}>
                        <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 1.5 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                            <Box className="nav-icon" sx={{ height: 18, width: 18, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: 'primary.main' }} alt="" />
                            {!open && <Typography variant="body1" sx={{ fontSize: 10, mt: .8, lineHeight: '10px', fontWeight: 600, color: "text.secondary" }}>{menuItem.menu_alias_name}</Typography>}
                        </ListItemIcon>
                        <ListItemText className="sample" primary={menuItem.menu_alias_name} sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none", color: '#fff' }} />
                    </ListItemButton>
                </NavLink>
            }
        </>
    )
}

const Sidebar = ({ open }) => {
    const signOut = useSignout();
    const navigate = useNavigate()

    return (
        <Box sx={{ display: { xs: "none", md: "block" }, width: { md: 80, lg: open ? 250 : 80 }, transition: '.4s', overflow: "hidden", height: '100vh', flexGrow: 1, position: "sticky", top: 0, zIndex: 100, "& *": { boxSizing: "border-box" }, backgroundColor: '#fff', borderRight: '1px solid #f5f5f5' }} >
            <Stack className={`sidebar`} sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', boxSizing: "border-box", position: "relative" }} >
                <Box>
                    <Box sx={{ py: 2, px: open ? 2 : 1, width: 1, boxSizing: "border-box" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: open ? 'start' : 'center', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                            <Box>
                                <Box component={'img'} src={Logo} sx={{ width: 30, height: 30, maxWidth: 50, transition: '.5s', }} alt="" />
                            </Box>
                            {
                                open &&
                                <Box>
                                    <Typography sx={{ fontSize: "1.8rem", fontWeight: 600, color: 'primary.main' }}>Quotes</Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                    <Box sx={{ maxHeight: "calc(100vh - 310px)", overflowY: "auto", overflowX: "hidden", height: '100%', }} className="scroll-bar">
                        <List component="nav" sx={{ "& *": { transition: ".4s all ease", color: "text.secondary", fontSize: open && "16px !important", letterSpacing: .4 }, width: '100%', "& .parent-nav:has(.active) .menu-head > .MuiListItemButton-root , & .parent-nav.active  > .MuiListItemButton-root": { ...linkStyles }, "& a": { textDecoration: "none" }, '& .MuiListItemText-root': { my: 0, } }}>
                            {menuItems.map((item, index) => <ListMenu open={open} menuItem={item} key={index} />)}
                        </List>
                    </Box>
                </Box>
                <Box sx={{ px: 1.5, py: open ? 1.5 : 1, boxSizing: "border-box" }}>
                    <Box sx={{ boxShadow: '0px 0px 1px 1px #eeeeee', p: 1.2, borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box>
                                <Avatar onClick={() => { navigate('/profile') }} sx={{ cursor: "pointer", width: open ? 42 : 36, height: open ? 42 : 36 }} alt="R" src="https://modernize-nextjs.adminmart.com/images/profile/user-7.jpg" />
                            </Box>
                            {
                                open &&
                                <Box>
                                    <Typography sx={{ lineHeight: "16px", fontSize: 14, maxLines: 1 }}>Ranjith Kumar</Typography>
                                    <Typography sx={{ fontSize: 12, color: '#323232', lineHeight: '12px', maxLines: 1, mt: .3 }}>Author</Typography>
                                </Box>
                            }
                        </Box>
                        <Box sx={{ borderRadius: 1.5, mt: 1.4 }}>
                            <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, }}>
                                <Button onClick={() => {
                                    signOut()
                                }} variant="contained" color="primary" size='large' startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ flexGrow: 1, backgroundColor: 'primary.main', textAlign: "start", fontSize: 14, px: 1, py: .8, minWidth: 0, color: 'text.default', letterSpacing: .3, textTransform: 'initial' }}>{open && "Log out"}</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Sidebar
import { Box, List, Stack, Typography, ListItemButton, ListItemIcon, Badge, Menu, ListItemText, Collapse, Button, Avatar, IconButton, keyframes, Drawer, useMediaQuery, MenuItem, ListItemAvatar, Tooltip, Chip } from '@mui/material'
import { useState } from 'react'
import { NavLink, useNavigate, useLocation, } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import profileIcon from '../assets/profile.png'
import dashboardIcon from '../assets/dashboard.png'
import chatIcon from '../assets/chat.png'
import postIcon from '../assets/post.png'
import userIcon from '../assets/users.png'
import quoteIcon from '../assets/quotes.png'
import Logo from '../assets/shape.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import useSignout from '../hooks/use-signout';
import useAuth from '../hooks/use-auth';


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
const ringAnimate = keyframes`
	0% { transform: rotate(0);}
  	25% { transform: rotate(-15deg);}
  	50% { transform: rotate(0deg);}
  	75% { transform: rotate(15deg);}
  	100% { transform: rotate(0);}
`

const linkStyles = {
    "& svg": { fill: "#fff" },
    bgcolor: "primary.main",
    color: "text.title",
    "&:hover": { bgcolor: "background.sidebar" },
    "& .MuiListItemText-primary": {
        color: "#fff",
        // fontWeight: 600
    },
    "& .MuiListItemIcon-root .nav-icon": {
        backgroundColor: '#fff'
    },
    "& .MuiListItemIcon-root p": {
        color: "text.title",
        fontWeight: 600
    }
}

const childLinkStyles = {
    position: 'relative',
    pl: 2,
    '&:before': {
        position: 'absolute',
        content: '""',
        height: '100%',
        left: 22,
        top: 0,
        borderRight: '1px dashed #c3c3c3'
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
            left: "10px",
            borderTop: '1px dashed #c3c3c3'
        }
    },
    "& .active > .MuiListItemButton-root .MuiListItemText-primary": {
        color: "text.primary"
    },
    "& .active > .MuiListItemButton-root:before": {
        borderColor: "text.primary"
    }
}

const ListMenu = ({ menuItem, open, setOpen }) => {
    const [isViewed, setIsViewed] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const handleClick = (e) => {
        setIsViewed(!isViewed)
    };
    return (
        <>
            {menuItem.sub_menu.length ?
                <>
                    <Box className={location.pathname.match(menuItem.menu_link) ? 'active parent-nav' : "parent-nav"} sx={{ '&.active .sample': { backgroundColor: 'text.default' } }}>
                        <Box className='menu-head'>
                            <ListItemButton onClick={(e) => { handleClick(e) }} sx={{ px: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 1.5, justifyContent: 'center', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                    <Box className="sample" sx={{ height: 20, width: 20, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: 'primary.main', }} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={menuItem.menu_alias_name} />
                                {isViewed ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </Box>
                        <Collapse in={isViewed} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{ ...childLinkStyles }}>
                                {menuItem.sub_menu.map((item, index) => (
                                    <NavLink key={index} to={`${menuItem.menu_link}${item.menu_link}`}>
                                        <ListItemButton disableRipple sx={{ pl: 4 }} onClick={() => { navigate(`${menuItem.menu_link}${item.menu_link}`); setOpen(!open) }}>
                                            <ListItemText primary={item.menu_alias_name} />
                                        </ListItemButton>
                                    </NavLink>
                                ))}
                            </List>
                        </Collapse>
                    </Box>

                </>
                :
                <NavLink to={menuItem.menu_link} className={"parent-nav"}>
                    <ListItemButton onClick={(e) => { setOpen(!open) }} sx={{ minHeight: 48, px: 2.5, }}>
                        <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 1.5 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                            <Box className="nav-icon" sx={{ height: 20, width: 20, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: 'primary.main' }} alt="" />
                        </ListItemIcon>
                        <ListItemText primary={menuItem.menu_alias_name} />
                    </ListItemButton>
                </NavLink>
            }
        </>
    )
}


const Navbar = ({ setOpenSideBar, isOpenSidebar }) => {

    const [open, setOpen] = useState(false)
    // const { isDarkMode } = useSelector(state => state.ui)
    // const [isDark, setIsDark] = useState(isDarkMode)  
    const signOut = useSignout();
    const navigate = useNavigate();
    const isTabView = useMediaQuery("(max-width: 900px)")
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const { user } = useAuth()

    // const handleThemeColor = (e) => {
    //     setIsDark(e.target.checked)
    //     dispatch(uiActions.setDarkMode(e.target.checked))
    // }
    return (
        <Box sx={{ display: "flex", alignItems: "center", width: 1, justifyContent: "space-between", }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton onClick={() => { !isTabView ? setOpenSideBar() : setOpen(true) }}><MenuOpenIcon sx={{ transform: !isOpenSidebar && !isTabView ? 'scaleX(-1)' : 'scaleX(1)' }} /></IconButton>
                {/* <Box>
                    <SwitchTheme checked={isDark} onChange={handleThemeColor} />
                </Box> */}
            </Box>
            <Box >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "end", textAlign: "end" }}>
                    <Box>
                        <IconButton sx={{ color: "primary.main", "&:hover svg": { animation: `${ringAnimate} .3s linear` } }} onClick={(event) => { setIsNotification(event.currentTarget); }}>
                            <Badge color="warning" variant="dot" invisible={false} sx={{ "& span": { top: 2, } }}>
                                <NotificationsActiveOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Menu
                        anchorEl={isNotification}
                        open={Boolean(isNotification)}
                        onClose={() => setIsNotification(false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className='sample test'
                        sx={{ mt: 1, "& .MuiPaper-elevation.MuiMenu-paper": { px: 0, minWidth: 300 }, "& .MuiPaper-elevation.MuiMenu-paper ul li:hover": { borderRadius: 0 } }}>
                        <Box sx={{ py: 2, px: 3 }}>
                            <Stack sx={{ flexDirection: 'row', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography sx={{ fontSize: 16, color: 'text.title' }}>Notifications</Typography>
                                </Box>
                                <Box>
                                    <Chip size='small' label="5 New" color='primary' />
                                </Box>
                            </Stack>
                        </Box>
                        <MenuItem sx={{ gap: 1, px: 3, py: 1.5 }} >
                            <ListItemIcon>
                                <Avatar src='https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg' />
                            </ListItemIcon>
                            <Box>
                                <ListItemText sx={{ "& span": { fontSize: 16, letterSpacing: .3, lineHeight: '20px' }, color: 'text.title' }}>Roman Join the Team!</ListItemText>
                                <ListItemText sx={{ "& span": { fontSize: 14, letterSpacing: .3, lineHeight: '18px' }, color: 'text.muted' }}>Congratulate him</ListItemText>
                            </Box>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, px: 3, py: 1.5 }} >
                            <ListItemIcon>
                                <Avatar src='https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg' />
                            </ListItemIcon>
                            <Box>

                                <ListItemText sx={{ "& span": { fontSize: 16, letterSpacing: .3, lineHeight: '20px' }, color: 'text.title' }}>New Message Received</ListItemText>
                                <ListItemText sx={{ "& span": { fontSize: 14, letterSpacing: .3, lineHeight: '18px' }, color: 'text.muted' }}>Salma sent you new message</ListItemText>
                            </Box>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, px: 3, py: 1.5 }} >
                            <ListItemIcon>
                                <Avatar src='https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg' />
                            </ListItemIcon>
                            <Box>

                                <ListItemText sx={{ "& span": { fontSize: 16, letterSpacing: .3, lineHeight: '20px' }, color: 'text.title' }}>New Payment Received</ListItemText>
                                <ListItemText sx={{ "& span": { fontSize: 14, letterSpacing: .3, lineHeight: '18px' }, color: 'text.muted' }}>Check your earnings</ListItemText>
                            </Box>
                        </MenuItem>
                        <Box sx={{ py: 2, px: 3 }}>
                            <Button variant='outlined' size='medium' fullWidth sx={{ letterSpacing: .3, fontSize: 15 }} onClick={() => { navigate('/chat'); setIsNotification(false) }}>See all Notifications</Button>
                        </Box>
                    </Menu>
                    {/* <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box>
                                <Box>
                                    <Typography sx={{ lineHeight: "15px", fontSize: 15, maxLines: 1 }}>Ranjith</Typography>
                                    <Typography sx={{ fontSize: 12, color: '#323232', lineHeight: '12px' }}>Author</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Avatar sx={{ cursor: "pointer", width: 35, height: 35 }} alt={user && user.first_name} src={User} onClick={(event) => { setIsOpenMenu(event.currentTarget); }} />
                            </Box>
                        </Box>
                    </Box> */}
                    {/* <Menu
                        anchorEl={isOpenMenu}
                        open={Boolean(isOpenMenu)}
                        onClose={() => setIsOpenMenu(false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{ mt: 1, '& .MuiMenuItem-root': { borderRadius: 0, '&:hover': { backgroundColor: 'transparent' } }, '& .MuiMenuItem-root:last-of-type': { borderRadius: '0px 0px 5px 5px' }, '& .MuiMenuItem-root:first-of-type': { borderRadius: '5px 5px 0px 0px' } }}>
                        <MenuItem onClick={() => { setIsOpenMenu(false) }} sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', minWidth: 180, '&:hover': { backgroundColor: 'transparent' } }} >
                            <ListItemAvatar sx={{ minWidth: 'auto' }}>
                                <Avatar sx={{ cursor: "pointer", width: 35, height: 35 }} alt={user && user.first_name} src={User} onClick={(event) => { setIsOpenMenu(event.currentTarget); }} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography sx={{ lineHeight: "normal", fontWeight: 600, textAlign: 'left', color: 'text.title' }}>Demo User</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', color: 'text.title', lineHeight: '12px' }}>Developer</Typography>
                            </ListItemText>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', px: 1 }} onClick={() => {
                            navigate("/profile")
                            setIsOpenMenu(false)
                        }}>
                            <ListItemIcon sx={{ minWidth: 35, height: 35, backgroundColor: 'background.light', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                <AccountCircleIcon color='primary' sx={{ fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText sx={{ fontSize: 14, color: 'text.title' }}>Profile</ListItemText>
                        </MenuItem>
                        <MenuItem sx={{ gap: 1, borderBottom: 1, borderColor: 'background.light', px: 1 }} onClick={() => {
                            signOut()
                            setIsOpenMenu(false)
                        }}>
                            <ListItemIcon sx={{ minWidth: 35, height: 35, backgroundColor: 'background.light', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1 }}>
                                <LogoutIcon color='primary' sx={{ rotate: "180deg", fontSize: 18, }} />
                            </ListItemIcon>
                            <ListItemText sx={{ fontSize: 14, color: 'text.title' }}>Sign Out</ListItemText>
                        </MenuItem>
                    </Menu> */}
                </Box>
            </Box>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => { setOpen(false) }}
                sx={{ width: 250, display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ width: 250, backgroundColor: '#fff', overflow: "hidden", height: '100vh', "& *": { boxSizing: "border-box" } }} >
                    <Stack sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', }} >
                        <Box>
                            <Box sx={{ py: 2, px: 2, width: 1, boxSizing: "border-box" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: 'center' }}>
                                    <Box>
                                        <Box component={'img'} src={Logo} sx={{ minWidth: 30, maxWidth: 40, transition: '.5s', }} alt="" />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "1.8rem", fontWeight: 600, color: 'primary.main' }}>Quotes</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ maxHeight: "calc(100vh - 255px)", overflowY: "auto", overflowX: "hidden", height: '100%', pt: .2 }} className="scroll-bar">
                                <List component="nav" sx={{ "& *": { transition: ".4s all ease", color: "text.title" }, width: '100%', "& .parent-nav.active > .MuiListItemButton-root , & .parent-nav.active > .menu-head > .MuiListItemButton-root ": { ...linkStyles }, "& a": { textDecoration: "none" } }}>
                                    {menuItems.map((item, index) => <ListMenu open={open} setOpen={setOpen} menuItem={item} key={index} />)}
                                </List>
                            </Box>
                        </Box>
                        <Box sx={{ px: 1, py: 2, boxSizing: "border-box" }}>
                            <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, color: 'primary.main' }}>
                                <Button variant="outlined" color="inherit" startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ border: 1, flexGrow: 1, textAlign: "start", fontSize: 12, px: 1, py: 1, minWidth: 0 }}
                                    onClick={() => {
                                        signOut()
                                    }}>Sign Out</Button>
                            </Box>
                        </Box>
                    </Stack >
                </Box >
            </Drawer >
        </Box>
    )
}

export default Navbar
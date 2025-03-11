import { Box, useMediaQuery } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import useRefreshToken from '../hooks/use-refresh-token';
import Preloader from '../components/Preloader';

const MainLayout = () => {
      const [open, setOpen] = useState(true)
      const isLapView = useMediaQuery("(max-width: 1199px)")
      // const [isLoaded, setIsLoaded] = useState(false)
      // const refresh = useRefreshToken();
      // const navigate = useNavigate();
      // const lastLogIn = localStorage.getItem('lastLogIn')
      // const isLoggedIn = localStorage.getItem('isLoggedIn')
      // const getAccessToken = async () => {
      //       try {
      //             if (lastLogIn && !isNaN(lastLogIn) && (new Date() < new Date(Number(lastLogIn))) && isLoggedIn) {
      //                   await refresh()
      //                   setIsLoaded(true)
      //             } else {
      //                   console.error("getAccessToken Fail")
      //                   navigate("/listing")
      //             }
      //       }
      //       catch (err) {
      //             console.error("🚀 ~ file: MainLayout.jsx:26 ~ useEffect ~ err:", err)
      //       }
      // }

      // useEffect(() => {
      //       getAccessToken()
      // }, [])

      // if (!isLoaded) {
      //       return (<Box><Preloader preload /></Box>)
      // }

      return (
            <>
                  <Box sx={{ display: "flex", height: "100vh", position: "relative", transition: '.4s' }}>
                        <Sidebar open={Boolean(open && !isLapView)} />
                        <Box sx={{ width: { xs: '100%', md: "calc(100% - 70px)", lg: `calc(100% - ${open ? "250px" : "70px"})` }, ml: 'auto', position: 'relative', transition: { xs: 0, md: '.4s' }, overflow: "auto" }} className="scroll-bar">
                              <Box sx={{ px: { xs: "12px", sm: 2 }, py: 1.3, position: 'sticky', top: 0, zIndex: 1000, left: 0, backgroundColor: 'background.default' }}>
                                    <Navbar setOpenSideBar={() => { setOpen(!open) }} isOpenSidebar={open} />
                              </Box>
                              <Box sx={{ p: { xs: '12px', sm: 2.5 }, maxWidth: '100%', mx: "auto" }}>
                                    <Outlet />
                              </Box>
                        </Box>
                  </Box>

            </>

      )
}

export default MainLayout
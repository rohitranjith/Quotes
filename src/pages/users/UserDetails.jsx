import { Avatar, Box, Button, Chip, Grid, IconButton, Paper, Stack, Typography } from "@mui/material"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useLocation } from "react-router-dom";

const UserDetails = () => {

    const { state } = useLocation()

    console.log(state)
    return (
        <Box>
            <Box sx={{ width: 1, height: { xs: 150, sm: 275 }, backgroundImage: `url(${'https://modernize-nextjs.adminmart.com/images/blog/blog-img2.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: 1.5 }}>
                <Box sx={{ p: 1.5, textAlign: 'right' }}>
                    <Button sx={{ fontSize: 16, letterSpacing: .3 }}>Upload Image</Button>
                </Box>
            </Box>
            <Box>
                <Avatar sx={{ width: { xs: 95, sm: 165 }, height: { xs: 95, sm: 165 }, mt: { xs: -8.5, sm: -15 }, mx: { xs: 1, sm: 4 } }} src={state?.image} />
            </Box>
            <Box sx={{ px: { xs: 1, sm: 4 } }}>
                <Box sx={{ mt: { xs: 3, sm: 5 } }}>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: { xs: 2, sm: 1 }, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <Box>
                            <Stack sx={{ flexDirection: 'row', gap: 1.5, }}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: 30, sm: 36 }, lineHeight: '36px' }}>{state?.first_name} {state?.last_name}</Typography>
                                </Box>
                                <Box sx={{ height: 24 }}>
                                    <VerifiedOutlinedIcon color="success" />
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack sx={{ flexDirection: 'row', gap: 2, }}>
                                <IconButton sx={{ backgroundColor: 'info.main', "&:hover": { backgroundColor: 'info.light' } }}>
                                    <PhoneOutlinedIcon sx={{ color: 'text.default' }} />
                                </IconButton>
                                <Box>
                                    <Button size="medium" sx={{ letterSpacing: .4 }} startIcon={<MessageOutlinedIcon />}>Message</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ mt: { xs: 3, sm: 5 } }}>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: { xs: 3, sm: 1 }, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <Box>
                            <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                                <Box>
                                    <Chip
                                        sx={{ px: 1, height: 40, borderRadius: 50, color: 'text.secondary', letterSpacing: .3, fontSize: 16, fontWeight: 500 }}
                                        label="Motivational Quotes"
                                        icon={<GradeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                    />
                                </Box>
                                <Box>
                                    <Chip
                                        sx={{ px: 1, height: 40, borderRadius: 50, color: 'text.secondary', letterSpacing: .3, fontSize: 16, fontWeight: 500 }}
                                        label="Love Quotes"
                                        icon={<GradeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                    />
                                </Box>
                                <Box>
                                    <Chip
                                        sx={{ px: 1, height: 40, borderRadius: 50, color: 'text.secondary', letterSpacing: .3, fontSize: 16, fontWeight: 500 }}
                                        label="Poetic Quotes"
                                        icon={<GradeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}>
                                <Box>
                                    <IconButton sx={{ backgroundColor: '#0288d10a', color: 'info.main', "&:hover": { color: "info.light", backgroundColor: '#0288d10a', } }}>
                                        <FacebookOutlinedIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton sx={{ backgroundColor: '#07a6980a', color: 'primary.main', "&:hover": { color: "primary.light", backgroundColor: '#07a6980a', } }}>
                                        <TwitterIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton sx={{ backgroundColor: '#ed6c020a', color: 'warning.main', "&:hover": { color: "warning.light", backgroundColor: '#ed6c020a', } }}>
                                        <InstagramIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton sx={{ backgroundColor: '#0288d10a', color: 'info.main', "&:hover": { color: "info.light", backgroundColor: '#0288d10a', } }}>
                                        <LinkedInIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton sx={{ backgroundColor: '#d32f2f0a', color: 'error.main', "&:hover": { color: "error.light", backgroundColor: '#d32f2f0a', } }}>
                                        <YouTubeIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ mt: { xs: 3, sm: 5 } }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ height: 1, }}>
                                <Paper sx={{ p: { xs: 1.5, sm: 3 }, height: 1, borderRadius: 1.5 }}>
                                    <Box>
                                        <Grid container spacing={{ xs: 2, sm: 3 }}>
                                            <Grid item xs={12} sm={6}>
                                                <Box>
                                                    <Typography sx={{ color: "text.muted", letterSpacing: .3 }}>Name:</Typography>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }}>
                                                        <Box sx={{ height: 22 }}>
                                                            <PersonOutlineOutlinedIcon sx={{ fontSize: 22 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>{state?.first_name} {state?.last_name}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box>
                                                    <Typography sx={{ color: "text.muted", letterSpacing: .3 }}>Username:</Typography>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }}>
                                                        <Box sx={{ height: 22 }}>
                                                            <PersonOutlineOutlinedIcon sx={{ fontSize: 22 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>{state?.username}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box>
                                                    <Typography sx={{ color: "text.muted", letterSpacing: .3 }}>Email:</Typography>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }}>
                                                        <Box sx={{ height: 22 }}>
                                                            <EmailOutlinedIcon sx={{ fontSize: 22 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>{state?.email}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box>
                                                    <Typography sx={{ color: "text.muted", letterSpacing: .3 }}>Website:</Typography>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }}>
                                                        <Box sx={{ height: 22 }}>
                                                            <LanguageOutlinedIcon sx={{ fontSize: 22 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>{state?.website}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <Typography sx={{ color: "text.muted", letterSpacing: .3 }}>Location:</Typography>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, mt: 1 }}>
                                                        <Box sx={{ height: 22 }}>
                                                            <PlaceOutlinedIcon sx={{ fontSize: 22 }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>MBR- Al Merkad, Dubai, United Arab Emirates</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ height: 1, }}>
                                <Paper sx={{ p: { xs: 1.5, sm: 3 }, height: 1, borderRadius: 1.5 }}>
                                    <Box>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, flexWrap: 'wrap', mt: .5 }}>
                                            <Box sx={{ height: 22 }}>
                                                <FormatQuoteOutlinedIcon sx={{ fontSize: 22 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: "text.muted", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>Our Famous Quotes:</Typography>
                                            </Box>
                                        </Stack>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, letterSpacing: .3 }}>{state?.quote_one}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: { xs: 2, sm: 4 } }}>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, flexWrap: 'wrap', mt: .5 }}>
                                            <Box sx={{ height: 22 }}>
                                                <FormatQuoteOutlinedIcon sx={{ fontSize: 22 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: "text.muted", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, lineHeight: '18px', letterSpacing: .3 }}>Our Favorite Quotes:</Typography>
                                            </Box>
                                        </Stack>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography sx={{ color: "text.secondary", fontSize: { xs: 15, sm: 16 }, fontWeight: 500, letterSpacing: .3 }}>{state?.quote_two}</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default UserDetails
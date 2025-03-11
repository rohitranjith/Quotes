import { Avatar, Box, Chip, Grid, IconButton, Pagination, Paper, Stack, Typography } from "@mui/material"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useState } from "react";

const Post = () => {

    const [post, setPost] = useState(BlogData)

    return (
        <Box>
            <Box>
                <Grid container spacing={3}>
                    {
                        post.map((data, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={4}>
                                <Paper sx={{ height: 1 }}>
                                    <Box sx={{ height: 240, position: 'relative' }}>
                                        <Box component={'img'} src={data.image} sx={{ width: 1, borderRadius: "8px 8px 0px 0px", height: 1, objectFit: 'cover' }} />
                                        <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
                                            <Chip label={data.read} size="small" color="info" sx={{ fontWeight: 500, letterSpacing: .4, color: 'text.default', }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: { xs: 1.5, sm: 3, position: 'relative' } }}>
                                        <Box sx={{ backgroundColor: 'background.default', width: 100, height: 46, position: 'absolute', top: -26, left: 0, mask: `url("https://free.minimals.cc/assets/icons/shape-avatar.svg") center center / cover no-repeat` }}></Box>
                                        <Box sx={{ mt: '-46px' }}>
                                            <Avatar src={data.user} sx={{ width: 50, height: 50 }} />
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Chip label={data.label} size="small" color="primary" sx={{ color: 'text.default', letterSpacing: .3, fontWeight: 500 }} />
                                        </Box>
                                        <Box sx={{ mt: 2.5 }}>
                                            <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'text.title', letterSpacing: .4, }}>{data.title}</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2.5 }}>
                                            <Stack sx={{ flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'space-between', mt: 1, flexWrap: 'wrap' }}>
                                                <Box>
                                                    <Stack sx={{ flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Box>
                                                            <Stack sx={{ flexDirection: 'row', gap: .6, alignItems: 'center' }}>
                                                                <IconButton size="small">
                                                                    <RemoveRedEyeOutlinedIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
                                                                </IconButton>
                                                                <Box>
                                                                    <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, sm: 16 }, letterSpacing: .6 }}>{data.view}</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                        <Box>
                                                            <Stack sx={{ flexDirection: 'row', gap: .6, alignItems: 'center' }}>
                                                                <IconButton size="small">
                                                                    <MessageOutlinedIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
                                                                </IconButton>
                                                                <Box>
                                                                    <Typography sx={{ color: 'text.secondary', fontSize: { xs: 15, sm: 16 }, letterSpacing: .6 }}>{data.message}</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                                <Box>
                                                    <Stack sx={{ flexDirection: 'row', gap: .3, alignItems: 'center' }}>
                                                        <IconButton size="small">
                                                            <FiberManualRecordOutlinedIcon sx={{ color: 'text.secondary', fontSize: 12 }} />
                                                        </IconButton>
                                                        <Box>
                                                            <Typography sx={{ color: 'text.secondary', letterSpacing: .6 }}>{data.date}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Box sx={{ mt: 5 }}>
                <Pagination color="primary" className="sample" sx={{ '& ul': { justifyContent: 'center' }, '& ul li button': { color: 'text.secondary' } }} count={10} />
            </Box>
        </Box>
    )
}

export default Post

const BlogData = [
    {
        id: 1,
        image: 'https://free.minimals.cc/assets/images/cover/cover-23.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-6.jpg',
        username: 'Mayme Perez',
        label: 'Confucius',
        title: 'It does not matter how slowly you go as long as you do not stop.',
        view: '50',
        message: '03',
        date: 'Mon, Feb 03',
        read: '2 min ago'
    },
    {
        id: 2,
        image: 'https://free.minimals.cc/assets/images/cover/cover-20.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        username: 'Fannie Bush',
        label: 'Winston Churchill',
        title: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        view: '5807',
        message: '09',
        date: 'Sun, Feb 08',
        read: '5 min ago'
    },
    {
        id: 3,
        image: 'https://free.minimals.cc/assets/images/cover/cover-17.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        username: 'Minerva Castillo',
        label: 'Sam Levenson',
        title: `Don't watch the clock; do what it does. Keep going.`,
        view: '3300',
        message: '13',
        date: 'Sat, Feb 01',
        read: '1 hr ago'
    },
    {
        id: 4,
        image: 'https://free.minimals.cc/assets/images/cover/cover-14.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg',
        username: 'Sophie Fox',
        label: 'Wayne Gretzky',
        title: `You miss 100% of the shots you don't take.`,
        view: '3338',
        message: '08',
        date: 'Sun, Feb 2',
        read: '12 min ago'
    },
    {
        id: 5,
        image: 'https://free.minimals.cc/assets/images/cover/cover-10.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        username: 'Hulda Schultz',
        label: 'Thomas Edison',
        title: `I have not failed. I've just found 10,000 ways that won't work.`,
        view: '5590',
        message: '15',
        date: 'Sat, Feb 14',
        read: '55 min ago'
    },
    {
        id: 6,
        image: 'https://free.minimals.cc/assets/images/cover/cover-5.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        username: 'Theresa Ramsey',
        label: 'C.S. Lewis',
        title: `You are never too old to set another goal or to dream a new dream.`,
        view: '1390',
        message: '06',
        date: 'Thu, Jan 30',
        read: '2 hr ago'
    },
    {
        id: 7,
        image: 'https://free.minimals.cc/assets/images/cover/cover-4.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg',
        username: 'Leah Jacobs',
        label: 'Steve Jobs',
        title: `The only way to do great work is to love what you do.`,
        view: '5573',
        message: '10',
        date: 'Thu, Jan 30',
        read: '2 day ago'
    },
    {
        id: 8,
        image: 'https://free.minimals.cc/assets/images/cover/cover-13.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg',
        username: 'Jeremy Romero',
        label: 'Theodore Roosevelt',
        title: 'Keep your eyes on the stars, and your feet on the ground.',
        view: '4095',
        message: '09',
        date: 'Wed, Jan 29',
        read: '20 min ago'
    },
]
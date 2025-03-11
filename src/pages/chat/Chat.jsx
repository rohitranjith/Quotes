import { Box, Grid, Paper, TextField, InputAdornment, Stack, Typography, Avatar, Badge, IconButton, Chip } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Chat = () => {

    const [chat, setChat] = useState(UserDetail);
    const [selectChat, setSelectChat] = useState(UserDetail[0])

    return (
        <Box>
            <Box>
                <Paper sx={{ borderRadius: 2 }}>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={4} xl={3} sx={{ borderRight: '1px solid #e5eaef' }}>
                                <Box>
                                    <Box sx={{ pt: 2, pb: 1, px: 2.2 }}>
                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1.5, }}>
                                            <Box>
                                                <Badge sx={{ '& span': { right: 5, bottom: 8 } }} color="secondary" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                                                    <Avatar src='https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg' sx={{ width: 50, height: 50 }} />
                                                </Badge>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: 'text.secondary', maxLines: 1 }}>Mathew Anderson</Typography>
                                                <Typography sx={{ fontSize: 13, color: 'text.muted', lineHeight: '14px', maxLines: 1 }}>Designer</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ py: 1, px: 2.2 }}>
                                        <TextField
                                            fullWidth
                                            sx={{
                                                borderRadius: 1,
                                            }}
                                            placeholder="Search"
                                            size={'small'}
                                            // value={searchText}
                                            // onChange={(e) => { setSearchText(e.target.value) }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='start'>
                                                        <SearchIcon sx={{ color: "lightgrey" }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ mt: 1, }}>
                                        {
                                            chat.map((data, index) => (
                                                <Box onClick={() => { setSelectChat(data) }} key={index} sx={{ py: 2, px: 2.2, mb: 1, cursor: 'pointer', transition: '.4s', "&": { backgroundColor: data.id === selectChat.id ? 'background.light' : 'transparent' }, "&:hover": { backgroundColor: 'background.light' } }}>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1.5, justifyContent: 'space-between' }}>
                                                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1.5, }}>
                                                            <Badge sx={{ '& span': { right: 4, bottom: 6 } }} color={data?.status === "Offline" ? "error" : "success"} variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                                                                <Avatar src={data?.image} sx={{ width: 38, height: 38 }} />
                                                            </Badge>
                                                            <Box>
                                                                <Typography sx={{ color: 'text.secondary', maxLines: 1 }}>{data?.name}</Typography>
                                                                <Typography sx={{ fontSize: 13, color: 'text.muted', lineHeight: '14px', maxLines: 1, letterSpacing: .3 }}>{data?.role === 0 ? "Author" : "Reader"}</Typography>
                                                            </Box>
                                                        </Stack>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            {
                                                                data?.count &&
                                                                <Box>
                                                                    <Chip label={data?.count} color="success" sx={{ height: 20, width: 20, borderRadius: '50%', '& span': { fontSize: 10, fontWeight: 500, letterSpacing: .3, p: 0 } }} />
                                                                </Box>
                                                            }
                                                            <Box sx={{ mt: .3 }}>
                                                                <Typography sx={{ fontSize: 13, color: 'text.muted', lineHeight: '14px', maxLines: 1 }}>{data?.time}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8} xl={9}>
                                <Stack sx={{ flexDirection: 'column', gap: 1, height: 1 }}>
                                    <Box sx={{ borderBottom: '1px solid #e5eaef' }}>
                                        <Box sx={{ py: 2, px: 2.2 }}>
                                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
                                                <Box>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, }}>
                                                        <Box>
                                                            <Badge sx={{ '& span': { right: 5, bottom: 8 } }} color={selectChat?.status === "Offline" ? "error" : "success"} variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                                                                <Avatar src={selectChat?.image} sx={{ width: 50, height: 50 }} />
                                                            </Badge>
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: 'text.secondary', maxLines: 1, fontWeight: 600, fontSize: 15 }}>{selectChat?.name}</Typography>
                                                            <Typography sx={{ fontSize: 13, color: 'text.muted', lineHeight: '14px', maxLines: 1 }}>{selectChat?.status}</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                                <Box>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 1, }}>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <LocalPhoneOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <VideocamOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <MoreVertOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>
                                    <Box className="scroll-bar" sx={{ height: 'calc(100vh - 275px)', overflow: 'auto' }}>
                                        <Box sx={{ py: 2, px: 2.2 }}>

                                            {
                                                selectChat.chat.map((data, index) => (
                                                    <Box sx={{ mb: 2 }} key={index}>
                                                        {
                                                            data.message_type === 0 ?
                                                                <Box>
                                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, }}>
                                                                        <Box>
                                                                            <Avatar src={selectChat?.image} sx={{ width: 45, height: 45 }} />
                                                                        </Box>
                                                                        <Box sx={{ flexGrow: 1 }}>
                                                                            <Typography sx={{ fontSize: 12, color: 'text.chatcolor', lineHeight: '14px', maxLines: 1, letterSpacing: .4 }}>{data?.date}, {data?.created_on}</Typography>
                                                                            <Box sx={{ mt: 1, backgroundColor: 'background.chatbg', py: 1.2, px: 1.5, borderRadius: '16px 16px 16px 0px', display: 'inline-block', maxWidth: { xs: '100%', sm: "50%" } }}>
                                                                                <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: '20px', letterSpacing: .4 }}>{data?.message}</Typography>
                                                                            </Box>
                                                                        </Box>
                                                                    </Stack>
                                                                </Box>
                                                                :
                                                                <Box>
                                                                    <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                                                                        <Typography sx={{ fontSize: 12, color: 'text.chatcolor', lineHeight: '14px', maxLines: 1, letterSpacing: .4 }}>{data?.date}, {data?.created_on}</Typography>
                                                                        <Box sx={{ mt: 1, backgroundColor: 'background.light', py: 1.2, px: 1.5, borderRadius: '16px 16px 0px 16px', display: 'inline-block', maxWidth: { xs: '100%', sm: "50%" } }}>
                                                                            <Typography sx={{ color: 'text.secondary', textAlign: 'left', fontSize: 14, lineHeight: '20px', letterSpacing: .4 }}>{data?.message}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                        }
                                                    </Box>
                                                ))
                                            }

                                        </Box>
                                    </Box>
                                    <Box sx={{ borderTop: '1px solid #e5eaef' }}>
                                        <Box sx={{ py: 2, px: 2.2 }}>
                                            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <TextField className="sample" sx={{ '& fieldset, &:hover .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline': { borderColor: 'transparent !important' }, }} fullWidth placeholder="Type a Message" />
                                                </Box>
                                                <Box>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 1, justifyContent: 'end' }}>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <SendOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <InsertPhotoOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                        <Box>
                                                            <IconButton size="small">
                                                                <AttachmentOutlinedIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default Chat

const UserDetail = [
    {
        id: 1,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        name: 'Georgeanna Ramero',
        status: 'Offline',
        role: 0,
        time: '07:22 PM',
        count: '05',
        chat: [
            {
                message_type: 0,
                message: `Hey, I just came across this beautiful quote: "How do I love thee? Let me count the ways..." by Elizabeth Barrett Browning. It made me think of you.`,
                date: 'Mon 25',
                created_on: '08:17 AM',
            },
            {
                message_type: 1,
                message: `Ah, that's so sweet! I love that sonnet. It's one of my favorites too. What's your favorite part about it?`,
                date: 'Mon 25',
                created_on: '08:20 AM',
            },
            {
                message_type: 0,
                message: `Hey, I just came across this beautiful quote: "How do I love thee? Let me count the ways..." by Elizabeth Barrett Browning. It made me think of you.`,
                date: 'Mon 25',
                created_on: '08:23 AM',
            },
            {
                message_type: 1,
                message: `For me, it's the depth of emotion. It shows how love can be both simple and profound. Speaking of love quotes, I found one recently that I think you'd like: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."`,
                date: 'Mon 25',
                created_on: '08:32 AM',
            },
            {
                message_type: 0,
                message: `That's beautiful! It reminds me of us and how we've always found a way to make things work despite any obstacles. Who said that?`,
                date: 'Mon 25',
                created_on: '09:20 AM',
            },
            {
                message_type: 1,
                message: `Maya Angelou. She's amazing, isn't she? Her words always touch my heart.`,
                date: 'Mon 25',
                created_on: '09:32 AM',
            },
            {
                message_type: 0,
                message: `Absolutely! Her poetry is so powerful. I think love quotes like these remind us of the beauty and strength of love.`,
                date: 'Mon 25',
                created_on: '12:20 PM',
            },
            {
                message_type: 1,
                message: `Exactly! They inspire us to appreciate the love we have and to nurture it every day. I'm grateful for you and for the love we share.`,
                date: 'Mon 25',
                created_on: '01:20 PM',
            },
            {
                message_type: 0,
                message: `Me too, Ryan. I love you.`,
                date: 'Mon 25',
                created_on: '02:40 PM',
            },
            {
                message_type: 1,
                message: `I love you too, Emily.`,
                date: 'Mon 25',
                created_on: '03:20 PM',
            },
        ]
    },
    {
        id: 2,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        name: 'Cami Macha',
        status: 'Online',
        role: 1,
        time: '08:27 PM',
        count: '12',
        chat: [
            {
                message_type: 0,
                message: `Hey, I needed a boost today. Do you have any favorite motivational quotes?`,
                date: 'Mon 25',
                created_on: '10:17 PM',
            },
            {
                message_type: 1,
                message: `Yeah, I do! One of my favorites is "Believe you can and you're halfway there." — Theodore Roosevelt. It always reminds me to stay positive.`,
                date: 'Mon 25',
                created_on: '10:30 PM',
            },
            {
                message_type: 0,
                message: `That's great! I love that one too. Another one that inspires me is "It does not matter how slowly you go as long as you do not stop." — Confucius. It keeps me going even when things get tough.`,
                date: 'Mon 25',
                created_on: '11:17 PM',
            },
            {
                message_type: 1,
                message: `That's so true! Perseverance is key. I also like "You miss 100% of the shots you don't take." — Wayne Gretzky. It encourages me to take risks and seize opportunities.`,
                date: 'Mon 25',
                created_on: '11:45 PM',
            },
            {
                message_type: 0,
                message: `Exactly! Taking that first step can be daunting, but it's often the most important one. Thanks for sharing these quotes; they really motivated me!`,
                date: 'Tue 26',
                created_on: '12:17 AM',
            },
            {
                message_type: 1,
                message: `No problem! Quotes like these always help me refocus. Let's keep each other motivated!`,
                date: 'Tue 26',
                created_on: '01:17 AM',
            },
        ]
    },
    {
        id: 3,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg',
        name: 'Alda Ziemer',
        status: 'Offline',
        role: 0,
        time: '11:19 PM',
        count: '07',
        chat: [
            {
                message_type: 0,
                message: `Hey Sam, I just read this amazing quote that really inspired me. It said, "Believe you can and you're halfway there." — Theodore Roosevelt. What do you think?`,
                date: 'Tue 26',
                created_on: '03:20 AM',
            },
            {
                message_type: 1,
                message: `I love that one! It's so true. Believing in ourselves is the first step to achieving anything. I have another one that I find really motivating: "The only way to do great work is to love what you do." — Steve Jobs. It reminds me to pursue my passions.`,
                date: 'Tue 26',
                created_on: '04:17 AM',
            },
            {
                message_type: 0,
                message: `That's a great one! It's so important to enjoy what we do. I've been feeling stuck lately, but quotes like these help me refocus. Do you have a favorite quote that always lifts you up?`,
                date: 'Tue 26',
                created_on: '05:30 AM',
            },
            {
                message_type: 1,
                message: `Actually, yes. "The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt. It reminds me to stay optimistic and keep working towards my goals.`,
                date: 'Tue 26',
                created_on: '06:17 AM',
            },
            {
                message_type: 0,
                message: `Beautiful! I'll have to remember that one. Thanks for sharing, Sam. You always know how to inspire me.`,
                date: 'Tue 26',
                created_on: '07:17 AM',
            },
            {
                message_type: 1,
                message: `No problem, Alex! We all need a little motivation sometimes. Let's keep sharing quotes and lifting each other up!`,
                date: 'Tue 26',
                created_on: '08:26 AM',
            },
        ]
    },
    {
        id: 4,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg',
        name: 'Luciano Macpherson',
        status: 'Online',
        role: 1,
        time: '03:14 AM',
        count: '04',
        chat: [
            {
                message_type: 0,
                message: `Hey, I just read this amazing quote by Socrates: "The unexamined life is not worth living." What do you think it means?`,
                date: 'Tue 26',
                created_on: '09:17 PM',
            },
            {
                message_type: 1,
                message: `I love that one! To me, it means that unless we reflect on our actions and thoughts, we're just going through the motions without any real purpose or understanding.`,
                date: 'Tue 26',
                created_on: '10:20 PM',
            },
            {
                message_type: 0,
                message: `Exactly! It's like, if we don't question our beliefs and experiences, we miss out on the depth of life. Have you come across any other quotes that resonate with you?`,
                date: 'Wed 27',
                created_on: '12:22 AM',
            },
            {
                message_type: 1,
                message: `Actually, yes. There's one by Albert Camus: "In the depth of winter, I finally learned that within me there lay an invincible summer." It's about finding hope and resilience even in difficult times.`,
                date: 'Wed 27',
                created_on: '12:48 AM',
            },
            {
                message_type: 0,
                message: `That's beautiful. It reminds me of the idea that our inner strength can overcome external challenges. Do you think these quotes can change how we live our lives?`,
                date: 'Wed 27',
                created_on: '02:22 AM',
            },
            {
                message_type: 1,
                message: `Definitely. They encourage us to think more deeply about our existence and to find meaning in our experiences. It's like they give us a new lens to view life through.`,
                date: 'Wed 27',
                created_on: '14:37 AM',
            },
            {
                message_type: 1,
                message: `I completely agree. Quotes like these inspire us to live more mindfully and authentically.`,
                date: 'Wed 27',
                created_on: '06:19 AM',
            },
        ]
    },
    {
        id: 5,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-6.jpg',
        name: 'Dalton Paden',
        status: 'Online',
        role: 1,
        time: '05:25 AM',
        count: '',
        chat: [
            {
                message_type: 0,
                message: `Hey, I just read this beautiful quote: "How do I love thee? Let me count the ways..." by Elizabeth Barrett Browning. It's so romantic!`,
                date: 'Thu 28',
                created_on: '12:22 AM',
            },
            {
                message_type: 1,
                message: `Ah, that's one of my favorites too! It captures the depth of love so well. What do you think is the most romantic part about it?`,
                date: 'Thu 28',
                created_on: '01:47 AM',
            },
            {
                message_type: 0,
                message: `I love how it expresses love in so many different ways. It's like every moment with the person you love is special. What about you? Do you have a favorite love quote?`,
                date: 'Thu 28',
                created_on: '02:59 AM',
            },
            {
                message_type: 1,
                message: `Actually, I do. "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope." by Maya Angelou. It reminds me that love can overcome anything.`,
                date: 'Thu 28',
                created_on: '04:18 AM',
            },
            {
                message_type: 0,
                message: `That's beautiful! It's so true. Love can make us feel invincible. I think that's what makes it so powerful.`,
                date: 'Thu 28',
                created_on: '05:18 AM',
            },
            {
                message_type: 1,
                message: `Exactly! It's not just a feeling; it's a force that can change our lives. Do you think these quotes inspire you to believe in true love?`,
                date: 'Thu 28',
                created_on: '06:12 AM',
            },
            {
                message_type: 0,
                message: `Definitely. They remind me that love is worth fighting for and believing in. What about you?`,
                date: 'Thu 28',
                created_on: '08:22 AM',
            },
            {
                message_type: 1,
                message: `Same here. They give me hope that true love is out there, and it's worth waiting for.`,
                date: 'Thu 28',
                created_on: '10:48 AM',
            },
        ]
    },
    {
        id: 6,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-7.jpg',
        name: 'Juan Granado',
        status: 'Offline',
        role: 0,
        time: '06:30 AM',
        count: '',
        chat: [
            {
                message_type: 0,
                message: `Hey Samantha, I just read this amazing quote: "Believe you can and you're halfway there." It really inspired me. Have you heard it?`,
                date: 'Thu 28',
                created_on: '01:48 PM',
            },
            {
                message_type: 1,
                message: `Yes, I love that one! It's by Theodore Roosevelt. I find it so motivating. What do you think it means to you?`,
                date: 'Thu 28',
                created_on: '03:12 PM',
            },
            {
                message_type: 0,
                message: `For me, it's about having faith in my abilities. It reminds me that mindset is everything. What about you? How does it inspire you?`,
                date: 'Thu 28',
                created_on: '04:28 PM',
            },
            {
                message_type: 1,
                message: `Exactly! It encourages me to take on challenges with confidence. I also like another quote: "It does not matter how slowly you go as long as you do not stop." It's so true, isn't it?`,
                date: 'Thu 28',
                created_on: '05:12 PM',
            },
            {
                message_type: 0,
                message: `Absolutely! That one is by Confucius. It's all about persistence. I think these quotes are great reminders to stay focused and keep moving forward.`,
                date: 'Thu 28',
                created_on: '06:19 PM',
            },
            {
                message_type: 1,
                message: `Totally agree. Quotes like these help me stay motivated, especially when things get tough. Do you have a favorite motivational quote?`,
                date: 'Thu 28',
                created_on: '07:31 PM',
            },
            {
                message_type: 0,
                message: `Actually, I do: "You miss 100% of the shots you don't take." It's by Wayne Gretzky. It reminds me to take risks and seize opportunities.`,
                date: 'Thu 28',
                created_on: '08:29 PM',
            },
            {
                message_type: 1,
                message: `That's a great one! I'll have to remember it. Thanks for sharing!`,
                date: 'Thu 28',
                created_on: '09:58 PM',
            },
        ]
    },
    {
        id: 7,
        role: 0,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-8.jpg',
        name: 'Revan Allen',
        status: 'Online',
        time: '07:47 AM',
        count: '',
        chat: [
            {
                message_type: 0,
                message: `Hey Samantha, I just read this amazing quote: "Believe you can and you're halfway there." It really inspired me. Have you heard it?`,
                date: 'Thu 29',
                created_on: '09:58 AM',
            },
            {
                message_type: 1,
                message: `Yes, I love that one! It's from Theodore Roosevelt, right? I find it so motivating. What made you think of it today?`,
                date: 'Thu 29',
                created_on: '10:30 AM',
            },
            {
                message_type: 0,
                message: `I was feeling a bit stuck with my project, and it reminded me that sometimes all it takes is a bit of faith in myself. Do you have a favorite inspirational quote?`,
                date: 'Thu 29',
                created_on: '11:18 AM',
            },
            {
                message_type: 1,
                message: `Actually, I do. "The future belongs to those who believe in the beauty of their dreams." It's by Eleanor Roosevelt. It always gives me hope and encourages me to chase my dreams.`,
                date: 'Thu 29',
                created_on: '11:58 AM',
            },
            {
                message_type: 0,
                message: `That's beautiful! I think we all need reminders like that to keep pushing forward. Maybe we can share more quotes and inspire each other.`,
                date: 'Thu 30',
                created_on: '12:58 PM',
            },
            {
                message_type: 1,
                message: `That sounds like a great idea! Let's do it. I'd love to hear more quotes that inspire you.`,
                date: 'Thu 30',
                created_on: '02:58 PM',
            },
        ]
    },
    {
        id: 8,
        role: 1,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-9.jpg',
        name: 'Juley Huseman',
        status: 'Offline',
        time: '09:14 AM',
        count: '',
        chat: [
            {
                message_type: 0,
                message: `Hey, have you ever thought about the quote "The unexamined life is not worth living"? What do you think it means?`,
                date: 'Thu 29',
                created_on: '03:58 PM',
            },
            {
                message_type: 1,
                message: `Yeah, I've thought about it a lot. To me, it means that if you don't reflect on your life and experiences, you're missing out on the opportunity to truly understand yourself and grow.`,
                date: 'Thu 29',
                created_on: '05:19 PM',
            },
            {
                message_type: 0,
                message: `That makes sense. It's like Socrates was saying that self-reflection is essential for living a meaningful life. What about the quote "The only true wisdom is in knowing you know nothing"? How do you interpret that?`,
                date: 'Thu 29',
                created_on: '06:18 PM',
            },
            {
                message_type: 1,
                message: `I think it's about humility and recognizing the limits of our knowledge. It encourages us to stay curious and open to learning, rather than assuming we have all the answers.`,
                date: 'Thu 29',
                created_on: '07:58 PM',
            },
            {
                message_type: 0,
                message: `Exactly! It's a reminder that there's always more to learn and discover. It keeps us grounded and encourages us to seek wisdom rather than just knowledge.`,
                date: 'Thu 29',
                created_on: '08:18 PM',
            },
            {
                message_type: 1,
                message: `Absolutely. Philosophical quotes like these always make me think deeper about life and how we approach it.`,
                date: 'Thu 29',
                created_on: '08:58 PM',
            },
            {
                message_type: 0,
                message: `Same here. They're great conversation starters and really make you reflect on your values and beliefs.`,
                date: 'Thu 29',
                created_on: '09:38 PM',
            },
        ]
    },
    {
        id: 9,
        role: 0,
        image: 'https://modernize-nextjs.adminmart.com/images/profile/user-10.jpg',
        name: 'Bridgette Phung',
        status: 'Online',
        time: '12:55 PM',
        count: '',
        chat: [
            {
                message_type: 0,
                message: `Hey Sam, I just read this beautiful quote: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves." What do you think?`,
                date: 'Sat 01',
                created_on: '12:05 PM',
            },
            {
                message_type: 1,
                message: `That's so true! It reminds me of another one: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope." It's amazing how love can overcome anything.`,
                date: 'Sat 01',
                created_on: '12:48 PM',
            },
            {
                message_type: 0,
                message: `Exactly! And I love how it emphasizes being loved for who we truly are. It's such a comforting feeling.`,
                date: 'Sat 01',
                created_on: '02:18 PM',
            },
            {
                message_type: 1,
                message: `Absolutely. It's like the quote says, love sees past our imperfections and loves us anyway. That's what makes it so powerful.`,
                date: 'Sat 01',
                created_on: '04:15 PM',
            },
            {
                message_type: 0,
                message: `Do you have a favorite love quote?`,
                date: 'Sat 01',
                created_on: '05:48 PM',
            },
            {
                message_type: 1,
                message: `Actually, I do: "How do I love thee? Let me count the ways..." It's just so romantic and expressive.`,
                date: 'Sat 01',
                created_on: '06:38 PM',
            },
            {
                message_type: 0,
                message: `That's a classic! I think it's beautiful how it explores all the ways love can be felt and expressed.`,
                date: 'Sat 01',
                created_on: '07:25 PM',
            },
            {
                message_type: 1,
                message: `Yeah, it's really special. Quotes like these remind us of the beauty and depth of love.`,
                date: 'Sat 01',
                created_on: '08:55 PM',
            },
        ]
    },
]


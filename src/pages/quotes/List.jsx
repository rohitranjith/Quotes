import { Box, Stack, TextField as MuiTextField, Typography, Grid, Button, InputAdornment, CircularProgress, MenuItem, Divider, Paper, Chip, IconButton, Tooltip, Avatar } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField, Select } from 'formik-mui';
import SearchIcon from '@mui/icons-material/Search';
import { alertMsg } from "../../utils/basicUtils";
import ModalBox from "../../components/ModalBox";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from "react";
import quotes from '../../assets/quote.png'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const initialQuotesInfo = {
    "quotes_description": "",
    "author_name": "",
    "quotes_type": "",
}

const List = () => {

    const [isAddQuotes, setIsAddQuotes] = useState(false);
    const [selectData, setSelectData] = useState(initialQuotesInfo);
    const [quotesList, setQuotesList] = useState(QuoteList)
    const [showPop, setShowPop] = useState(false)

    const handleAddTask = async (Values) => {
        try {
            alertMsg(selectData?.id ? 'Quotes Edited Successfully' : 'Quotes Created Successfully', 'success')
            setIsAddQuotes(false)
            console.log(Values)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Box>
            <Box>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Box>
                        <MuiTextField
                            fullWidth
                            sx={{
                                width: { xs: 260, sm: 300 },
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
                    <Box>
                        <Button onClick={() => { setIsAddQuotes(true); setSelectData(initialQuotesInfo) }} size='medium' sx={{ letterSpacing: .4 }} startIcon={<AddIcon />}>Create Quotes</Button>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    {
                        quotesList.map((data, index) => (
                            <>
                                {/* <Grid key={index} item xs={12} md={4}>
                                    <Box sx={{ height: 1 }}>
                                        <Paper sx={{ p: 4, pl: 2, borderRadius: 2, height: 1, position: 'relative', "&:hover .cs-delete-btn": { bottom: 10, opacity: 1 } }}>
                                            <Box>
                                                <Stack sx={{ flexDirection: 'row', gap: 1.8 }}>
                                                    <Box sx={{ mt: -2 }}>
                                                        <Box component={'img'} src={quotes} sx={{ height: 45, width: 45 }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.muted', fontSize: 16, letterSpacing: .5, textAlign: 'justify' }}>{data?.quotes_description}</Typography>
                                                    </Box>
                                                </Stack>
                                                <Box sx={{ mt: 2 }}>
                                                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, justifyContent: 'end' }}>
                                                        <Box>
                                                            <Box sx={{ backgroundColor: 'text.primary', width: '20px', height: "2px" }} />
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ color: 'text.primary', fontSize: 18, fontWeight: 600, letterSpacing: .3 }}>{data?.author_name}.</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>

                                        </Paper>
                                    </Box>
                                </Grid> */}
                                <Grid key={index} item xs={12} sm={6} lg={4}>
                                    <Paper sx={{ height: 1, "&:hover .cs-action": { top: 10, opacity: 1 }, overflow: 'hidden' }}>
                                        <Box sx={{ height: 175, position: 'relative', }}>
                                            <Box component={'img'} src={data.image} sx={{ width: 1, borderRadius: "8px 8px 0px 0px", height: 1, objectFit: 'cover' }} />
                                            <Box className="cs-action" sx={{ position: 'absolute', top: -30, right: 10, opacity: 0, transition: '.4s' }}>
                                                <Tooltip title="Edit">
                                                    <IconButton size="small" sx={{ "&:hover, &.MuiIconButton-sizeSmall": { backgroundColor: 'background.default' }, mr: .7 }} color="info" onClick={() => { setIsAddQuotes(true); setSelectData(data) }}>
                                                        <EditOutlinedIcon sx={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton size="small" sx={{ "&:hover, &.MuiIconButton-sizeSmall": { backgroundColor: 'background.default' } }} color="error" onClick={() => { setShowPop(true); setSelectData(data) }}>
                                                        <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                            <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
                                                <Chip label={data.quotes_type} size="small" color="info" sx={{ fontWeight: 500, letterSpacing: .4, color: 'text.default', }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ p: { xs: 1.5, sm: 3, position: 'relative' } }}>
                                            <Box sx={{ backgroundColor: 'background.default', width: 100, height: 46, position: 'absolute', top: -26, left: '50%', transform: 'translateX(-50%)', mask: `url("https://free.minimals.cc/assets/icons/shape-avatar.svg") center center / cover no-repeat` }}>
                                            </Box>
                                            <Box sx={{ mt: '-46px' }}>
                                                <Avatar src={data.user} sx={{ width: 50, height: 50, mx: 'auto' }} />
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: { xs: 18, sm: 18 }, color: 'text.secondary', letterSpacing: .4, }}>{data.quotes_description}</Typography>
                                            </Box>
                                            <Box sx={{ mt: 2, textAlign: 'right' }}>
                                                <Typography sx={{ color: 'text.secondary', letterSpacing: .3, fontWeight: 500, fontSize: 16 }}>- {data.author_name}</Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </>
                        ))
                    }
                </Grid>
            </Box>

            <Popup show={showPop} title='Delete Quote' consent={true} variant='error' primaryBtnTxt='delete'
                onSecondaryClick={() => { setShowPop(false) }}>
                <Box>
                    <Typography sx={{ color: 'text.muted', letterSpacing: .3, fontSize: 16 }}>
                        <Typography component={'span'}>This action will permanently delete your Quote </Typography>
                        Do you want to delete <Typography component={'span'} style={{ fontWeight: 600, color: "#000" }}>{selectData?.author_name}</Typography> Quote?</Typography>
                </Box>
            </Popup>

            <ModalBox
                open={isAddQuotes}
                title={selectData?.id ? 'Edit Quotes' : 'Create Quotes'}
                closeBtn
                icon={<FormatQuoteOutlinedIcon color='primary' sx={{ fontSize: 24 }} />}
                onClose={() => setIsAddQuotes(false)}
                sx={{ borderRadius: 2, maxWidth: { xs: '100%', md: "600px" }, width: '100%', }}>
                <Box>
                    <Formik
                        initialValues={selectData}
                        validationSchema={
                            Yup.object({
                                quotes_description: Yup.string()
                                    .required('Quotes Description is required'),
                                author_name: Yup.string()
                                    .required('Author Name is required'),
                                quotes_type: Yup.string()
                                    .required('Quotes Type is required'),
                            })
                        }
                        onSubmit={handleAddTask}
                        enableReinitialize={true}>
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Box>
                                    <Box>
                                        <Field
                                            className='sample'
                                            sx={{ "&.MuiFormControl-fullWidth input": { color: 'text.secondary', letterSpacing: .3 } }}
                                            component={TextField}
                                            fullWidth
                                            size="small"
                                            name="author_name"
                                            label="Author Name*"
                                            inputProps={{
                                                style: { backgroundColor: '#fff' }
                                            }}
                                            InputProps={{
                                                style: { backgroundColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PersonOutlineOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
                                                    </InputAdornment>
                                                ),
                                            }}

                                        />
                                    </Box>
                                    <Box sx={{ mt: 2.5 }}>
                                        <Field
                                            sx={{ "& .MuiSelect-select": { color: 'text.secondary', letterSpacing: .3 } }}
                                            component={Select}
                                            formControl={{ fullWidth: true }}
                                            name="quotes_type"
                                            label="Quotes Type*">
                                            <MenuItem value={"Motivational"}>Motivational</MenuItem>
                                            <MenuItem value={"Love"}>Love</MenuItem>
                                            <MenuItem value={"Inspirational"}>Inspirational</MenuItem>
                                            <MenuItem value={"Philosophical"}>Philosophical</MenuItem>
                                        </Field>
                                    </Box>
                                    <Box sx={{ mt: 2.5 }}>
                                        <Field
                                            sx={{ '& textarea': { color: 'text.secondary', letterSpacing: .3 } }}
                                            component={TextField}
                                            fullWidth
                                            size="small"
                                            name="quotes_description"
                                            label="Quotes Description*"
                                            multiline
                                            rows={4}
                                            autoComplete="off"
                                            inputProps={{
                                                style: { backgroundColor: '#fff' }
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Stack gap={1} alignItems="center" sx={{ flexDirection: 'row', justifyContent: 'end' }}>
                                        <Button color='error' sx={{ px: 4 }} disabled={isSubmitting} variant="outlined" onClick={() => { setIsAddQuotes(false) }}>Cancel</Button>
                                        <Button color={"primary"} disabled={isSubmitting} type="submit" sx={{ px: 4 }} variant="contained">{selectData?.id ? 'Edit Quotes' : 'Create Quotes'}
                                            {isSubmitting && <CircularProgress sx={{ width: "20px !important", height: "20px !important", verticalAlign: "middle", ml: 1, color: "grey.500" }} />}
                                        </Button>
                                    </Stack>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </ModalBox>
        </Box >
    )
}

export default List

const QuoteList = [
    {
        id: 1,
        image: 'https://free.minimals.cc/assets/images/cover/cover-23.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-6.jpg',
        quotes_description: `"The greatest glory in living lies not in never falling, but in rising every time we fall. Do not judge me by my successes, judge me by how many times I fell down and got back up again."`,
        author_name: 'Nelson Mandela',
        quotes_type: 'Motivational',
    },
    {
        id: 2,
        image: 'https://free.minimals.cc/assets/images/cover/cover-20.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        quotes_description: `"How do I love thee? Let me count the ways. The depth and breadth and height my soul can reach, when feeling out of sight for the ends of Being and ideal grace. Most quiet need, by sun and candlelight."`,
        author_name: 'Elizabeth Barrett Browning',
        quotes_type: 'Love',
    },
    {
        id: 3,
        image: 'https://free.minimals.cc/assets/images/cover/cover-17.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        quotes_description: `"You are never too old to set another goal or to dream a new dream. The future belongs to those who believe in the beauty of their dreams."`,
        author_name: 'C.S. Lewis and Eleanor Roosevelt',
        quotes_type: 'Inspirational',
    },
    {
        id: 4,
        image: 'https://free.minimals.cc/assets/images/cover/cover-14.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg',
        quotes_description: `"Success is not final, failure is not fatal: It is the courage to continue that counts. Never give in except to convictions of honour and good sense."`,
        author_name: 'Winston Churchill',
        quotes_type: 'Motivational',
    },
    {
        id: 5,
        image: 'https://free.minimals.cc/assets/images/cover/cover-10.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        quotes_description: `"The unexamined life is not worth living. The unlived life is not worth examining."`,
        author_name: 'Socrates and Unknown',
        quotes_type: 'Philosophical',
    },
    {
        id: 6,
        image: 'https://free.minimals.cc/assets/images/cover/cover-5.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        quotes_description: `"Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."`,
        author_name: 'Maya Angelou',
        quotes_type: 'Love',
    },
    {
        id: 7,
        image: 'https://free.minimals.cc/assets/images/cover/cover-4.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg',
        quotes_description: `"You don't have to be great to start, but you have to start to be great. The way to get started is to quit talking and begin doing."`,
        author_name: 'Zig Ziglar and Walt Disney',
        quotes_type: 'Motivational',
    },
    {
        id: 8,
        image: 'https://free.minimals.cc/assets/images/cover/cover-13.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg',
        quotes_description: `"The best way to predict your future is to create it. You are never too old to become younger!"`,
        author_name: 'Abraham Lincoln and Mae West',
        quotes_type: 'Inspirational',
    },
    {
        id: 9,
        image: 'https://free.minimals.cc/assets/images/cover/cover-20.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg',
        quotes_description: `"The biggest adventure you can take is to live the life of your dreams. The greatest risk is not taking any risk..."`,
        author_name: 'Oprah Winfrey and Mark Zuckerberg',
        quotes_type: 'Philosophical',
    },
    {
        id: 10,
        image: 'https://free.minimals.cc/assets/images/cover/cover-14.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg',
        quotes_description: `"Where there is love, there is life. Love is the master key that opens the gates of happiness."`,
        author_name: 'Mahatma Gandhi and Oliver Wendell Holmes',
        quotes_type: 'Love',
    },
    {
        id: 11,
        image: 'https://free.minimals.cc/assets/images/cover/cover-17.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg',
        quotes_description: `"Do something today that your future self will thank you for. The best time to plant a tree was 20 years ago. The second best time is now."`,
        author_name: 'Unknown and Chinese Proverb',
        quotes_type: 'Motivational',
    },
    {
        id: 12,
        image: 'https://free.minimals.cc/assets/images/cover/cover-23.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-6.jpg',
        quotes_description: `"You are stronger than you seem, braver than you believe, and smarter than you think. Anything is possible if you believe."`,
        author_name: 'A.A. Milne and Unknown',
        quotes_type: 'Inspirational',
    },
    {
        id: 13,
        image: 'https://free.minimals.cc/assets/images/cover/cover-4.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg',
        quotes_description: `"The only true wisdom is in knowing you know nothing. Wisdom begins in wonder."`,
        author_name: 'Socrates and Unknown',
        quotes_type: 'Philosophical',
    },
    {
        id: 14,
        image: 'https://free.minimals.cc/assets/images/cover/cover-13.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg',
        quotes_description: `"Love is or it ain't. Thin love ain't love at all."`,
        author_name: 'Toni Morrison',
        quotes_type: 'Love',
    },
    {
        id: 15,
        image: 'https://free.minimals.cc/assets/images/cover/cover-4.webp',
        user: 'https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg',
        quotes_description: `"It always seems impossible until it's done. The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        author_name: 'Nelson Mandela',
        quotes_type: 'Motivational',
    },
]
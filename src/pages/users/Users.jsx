import { Box, Button, Chip, CircularProgress, IconButton, InputAdornment, MenuItem, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField as MuiTextField, Typography, Grid } from "@mui/material"
import Popup from "../../components/Popup"
import { useState } from "react"
import Empty from "../../components/Empty"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ModalBox from "../../components/ModalBox";
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField, Select } from 'formik-mui';
import { alertMsg } from "../../utils/basicUtils";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useNavigate } from "react-router-dom";


const initialUserInfo = {
    "first_name": "",
    "last_name": "",
    "username": "",
    "status": "",
    "email": "",
    "website": "",
}

const UserTableItem = ({ userData, onOpenDelete, onOpenEdit, onOpenData }) => {

    const navigate = useNavigate()

    return (
        <TableRow sx={{ '& td': { px: "12px", py: '16px', borderColor: '#f6f6f6' }, '& td>p': { fontSize: 13 }, }}>
            <TableCell sx={{ whiteSpace: 'nowrap', width: 50 }} align={'center'}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>{userData?.id}</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Typography variant="body1" sx={{ fontSize: '15px !important', color: 'text.secondary', letterSpacing: .3 }}>{userData?.first_name} {userData?.last_name}</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Typography variant="body1" sx={{ fontSize: '15px !important', color: 'text.secondary', letterSpacing: .3 }}>{userData?.email}</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Typography variant="body1" sx={{ fontSize: '15px !important', color: 'text.secondary', letterSpacing: .3 }}>{userData?.website}</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Typography variant="body1" sx={{ fontSize: '15px !important', color: 'text.secondary', letterSpacing: .3 }}>{userData?.username}</Typography>
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Chip sx={{ letterSpacing: .4, lineHeight: 'normal', textTransform: 'capitalize' }} size="small" label={userData?.status === 1 ? "Active" : 'Inactive'} color={userData?.status === 1 ? "success" : "error"} />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>
                <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <IconButton size="small" color="info" onClick={() => { onOpenEdit(userData) }}>
                        <EditOutlinedIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton size="small" color="warning" onClick={() => { navigate('/users/details', { state: userData }) }}>
                        <VisibilityOutlinedIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => { onOpenDelete(userData) }}>
                        <DeleteOutlinedIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

const Users = () => {
    const [userList, setUserList] = useState(userData)
    const [showPop, setShowPop] = useState(false)
    const [isAddUser, setIsAddUser] = useState(false);
    const [selectData, setSelectData] = useState(initialUserInfo);

    console.log(selectData)

    const handleAddTask = async (Values) => {
        try {
            alertMsg(selectData?.id ? 'User Edited Successfully' : 'User Created Successfully', 'success')
            setIsAddUser(false)
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
                        <Button onClick={() => { setIsAddUser(true); setSelectData(initialUserInfo) }} size='medium' sx={{ letterSpacing: .4 }} startIcon={<AddIcon />}>Create User</Button>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ mt: 3 }}>
                {
                    userList?.length > 0 ?
                        <TableContainer sx={{ overflow: 'auto', border: '1px solid #f6f6f6', borderRadius: 2, }} className='scroll-bar' >
                            <Table stickyHeader size='small'>
                                <TableHead>
                                    <TableRow sx={{
                                        '& th': {
                                            backgroundColor: '#f9f9f9',
                                            p: 2, border: 0, borderBottom: '1px solid #f6f6f6',
                                            fontSize: 16, fontWeight: 600, color: 'text.secondary', letterSpacing: .3
                                        },
                                    }}>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Id</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Name</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Email</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Website</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Username</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Status</TableCell>
                                        <TableCell sx={{ whiteSpace: 'nowrap' }} align={'center'}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        userList.map((userData, index) => (
                                            <UserTableItem userData={userData} onOpenDelete={() => { setShowPop(true); setSelectData(userData) }} onOpenEdit={() => { setIsAddUser(true); setSelectData(userData) }} onOpenData={() => { setSelectData(userData) }} key={index} />
                                        ))
                                    }
                                </TableBody>
                            </Table>
                            <Box sx={{ py: 2.5, width: 1 }}>
                                <Pagination color="primary" className="sample" sx={{ '& ul': { justifyContent: 'center' }, '& ul li button': { color: 'text.secondary' } }} count={10} />
                            </Box>
                        </TableContainer>
                        :
                        <Box>
                            <Empty text={'There is no user list available.'} sx={{ height: { xs: 'calc(100vh - 250px)', sm: 'calc(100vh - 290px)' } }} />
                        </Box>
                }
            </Box>

            <Popup show={showPop} title='Delete User' consent={true} variant='error' primaryBtnTxt='delete'
                onSecondaryClick={() => { setShowPop(false) }}>
                <Box>
                    <Typography sx={{ color: 'text.muted', letterSpacing: .3, fontSize: 16 }}>
                        <Typography component={'span'}>This action will permanently delete your User </Typography>
                        Do you want to delete <Typography component={'span'} style={{ fontWeight: 600, color: "#000" }}>{selectData?.first_name} {selectData?.last_name}</Typography> User?</Typography>
                </Box>
            </Popup>

            <ModalBox
                open={isAddUser}
                title={selectData?.id ? 'Edit User' : 'Create User'}
                closeBtn
                icon={<PersonAddOutlinedIcon color='primary' sx={{ fontSize: 24 }} />}
                onClose={() => setIsAddUser(false)}
                sx={{ borderRadius: 2, maxWidth: { xs: '100%', md: "700px" }, width: '100%', }}>
                <Box>
                    <Formik
                        initialValues={selectData}
                        validationSchema={
                            Yup.object({
                                first_name: Yup.string()
                                    .required('First Name is required'),
                                username: Yup.string()
                                    .required('User Name is required'),
                                status: Yup.string()
                                    .required('User Status is required'),
                                website: Yup.string()
                                    .required('Website is required'),
                                email: Yup.string().email('Email is invalid')
                                    .required('Email is required'),
                            })
                        }
                        onSubmit={handleAddTask}
                        enableReinitialize={true}>
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Box>
                                    <Box>
                                        <Grid container spacing={{ xs: 2, sm: 3 }}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="first_name"
                                                    label="First Name*"
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
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="last_name"
                                                    label="Last Name"
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
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="username"
                                                    label="Username"
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
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="email"
                                                    label="Email"
                                                    type='email'
                                                    inputProps={{
                                                        style: { backgroundColor: '#fff' }
                                                    }}
                                                    InputProps={{
                                                        style: { backgroundColor: '#fff' },
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <EmailOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    size="small"
                                                    name="website"
                                                    label="Website"
                                                    inputProps={{
                                                        style: { backgroundColor: '#fff' }
                                                    }}
                                                    InputProps={{
                                                        style: { backgroundColor: '#fff' },
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <LanguageOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    sx={{ "& .MuiSelect-select": { color: 'text.title' } }}
                                                    component={Select}
                                                    formControl={{ fullWidth: true }}
                                                    name="status"
                                                    label="User Status*">
                                                    <MenuItem value={0}>Inactive</MenuItem>
                                                    <MenuItem value={1}>Active</MenuItem>
                                                </Field>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Stack gap={1} alignItems="center" sx={{ flexDirection: 'row', justifyContent: 'end' }}>
                                        <Button color='error' sx={{ px: 4 }} disabled={isSubmitting} variant="outlined" onClick={() => { setIsAddUser(false) }}>Cancel</Button>
                                        <Button color={"primary"} disabled={isSubmitting} type="submit" sx={{ px: 4 }} variant="contained">{selectData?.id ? 'Edit User' : 'Create User'}
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

export default Users

const userData = [
    {
        "id": 1,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com",
        "website": "johndoe.com",
        "status": 1,
        "username": "johndoe",
        "phoneNumber": "123-456-7890",
        "quote_one": "The only thing we have to fear is fear itself — nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.",
        "quote_two": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
        "id": 2,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg",
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "jane@example.com",
        "website": "janesmith.com",
        "status": 1,
        "username": "janesmith",
        "phoneNumber": "987-654-3210",
        "quote_one": "Hope is the thing with feathers—That perches in our Soul—",
        "quote_two": "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        "id": 3,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg",
        "first_name": "Michael",
        "last_name": "Brown",
        "email": "michael@example.com",
        "website": "michaelbrown.com",
        "status": 0,
        "username": "michaelbrown",
        "phoneNumber": "555-123-4567",
        "quote_one": "When you come to the end of your rope, tie a knot and hang on.",
        "quote_two": "Hope is the light at the end of the tunnel.",
    },
    {
        "id": 4,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg",
        "first_name": "Emily",
        "last_name": "Davis",
        "email": "emily@example.com",
        "website": "emilydavis.com",
        "status": 1,
        "username": "emilydavis",
        "phoneNumber": "111-222-3333",
        "quote_one": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        "quote_two": "When life gives you lemons, make lemonade.",
    },
    {
        "id": 5,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-6.jpg",
        "first_name": "William",
        "last_name": "Lee",
        "email": "william@example.com",
        "website": "williamlee.com",
        "status": 1,
        "username": "williamlee",
        "phoneNumber": "444-555-6666",
        "quote_one": "Do something today that your future self will thank you for.",
        "quote_two": "Believe you can and you're halfway there.",
    },
    {
        "id": 6,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-7.jpg",
        "first_name": "Olivia",
        "last_name": "Martin",
        "email": "olivia@example.com",
        "website": "oliviamartin.com",
        "status": 0,
        "username": "oliviamartin",
        "phoneNumber": "777-888-9999",
        "quote_one": "You alone are enough. You have nothing to prove to anyone.",
        "quote_two": "Confidence comes not from always being right but from not fearing to be wrong.",
    },
    {
        "id": 7,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-8.jpg",
        "first_name": "David",
        "last_name": "White",
        "email": "david@example.com",
        "website": "davidwhite.com",
        "status": 1,
        "username": "davidwhite",
        "phoneNumber": "333-444-5555",
        "quote_one": "You are never too old to set another goal or to dream a new dream.",
        "quote_two": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
        "id": 8,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-9.jpg",
        "first_name": "Sophia",
        "last_name": "Patel",
        "email": "sophia@example.com",
        "website": "sophiapatel.com",
        "status": 1,
        "username": "sophiapatel",
        "phoneNumber": "666-777-8888",
        "quote_one": "You don't have to be great to start, but you have to start to be great.",
        "quote_two": "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        "id": 9,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-10.jpg",
        "first_name": "Alexander",
        "last_name": "Kim",
        "email": "alexander@example.com",
        "website": "alexanderkim.com",
        "status": 0,
        "username": "alexanderkim",
        "phoneNumber": "999-000-1111",
        "quote_one": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        "quote_two": "You are stronger than you seem, braver than you believe, and smarter than you think.",
    },
    {
        "id": 10,
        "image": "https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg",
        "first_name": "Isabella",
        "last_name": "Hall",
        "email": "isabella@example.com",
        "website": "isabellahall.com",
        "status": 1,
        "username": "isabellahall",
        "phoneNumber": "222-333-4444",
        "quote_one": "Do something today that your future self will thank you for.",
        "quote_two": "You alone are enough. You have nothing to prove to anyone.",
    }
]

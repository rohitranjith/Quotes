import { Box, Button, Paper, Typography, Container, Divider, Grid, InputAdornment, IconButton, CircularProgress, Stack } from '@mui/material'
import { useState } from 'react'
import bgImage from '../../assets/login-2.jpg'
import Logo from '../../assets/shape.png'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import { alertMsg } from '../../utils/basicUtils'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ModalBox from '../../components/ModalBox';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [isForgetPassword, setIsForgetPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [isSignin, setIsSignin] = useState(true);


    const handleSignIn = async () => {
        try {
            alertMsg('Account Login Successfully', 'success')
            navigate('/')
        }

        catch (err) {
            console.error(err)
        }
    }

    const handleSignUp = async () => {
        try {
            alertMsg('Account Created Succesfully', 'success')
            setOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    const forgotPassword = async () => {
        try {
            alertMsg('Forget Password Updated', 'success')
            setIsForgetPassword(false)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Box>
            <Box sx={{ minHeight: "100vh", maxHeight: '100vh', display: "flex", alignItems: "center", backgroundColor: 'background.light' }}>
                <Container maxWidth="lg">
                    <Paper sx={{ p: 2, minHeight: { xs: 'auto', sm: '75vh' }, boxShadow: 'none', }}>
                        <Grid container spacing={3} sx={{ alignItems: "center", }}>
                            <Grid item xs={12} md={6.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box sx={{ border: '1px solid #f9e6d9', p: .8, borderRadius: 2 }}>
                                    <Box sx={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', height: { xs: 'auto', sm: '75vh' }, backgroundSize: 'cover', position: 'relative', borderRadius: 1.5, backgroundPosition: 'center' }}>
                                        <Box sx={{ px: { xs: 1, sm: 2, md: 3 }, position: 'absolute', bottom: 24, left: 0, }}>
                                            <Box>
                                                <Typography sx={{ fontSize: { xs: '1.8rem', sm: "2.8rem" }, fontWeight: 500, color: 'text.default' }}>Borcelle</Typography>
                                                <Typography sx={{ fontSize: { xs: 15, sm: 17, }, color: 'text.default', mt: .5, letterSpacing: .5, fontWeight: 400 }}>Borcelle specializes in a wide range of image editing services, including virtual staging and HDR blending, to enhance visual content for industries such as real estate and e-commerce.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5.5}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box>
                                        <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ cursor: 'pointer', maxWidth: 50, minWidth: 30, }} alt="" />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2rem", }, fontWeight: 600, color: 'primary.main' }}>Quotes</Typography>
                                    </Box>
                                    <Box sx={{ mt: .5 }}>
                                        <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.6rem", }, fontWeight: 500, color: 'text.title' }}>Sign In to Your Account</Typography>
                                    </Box>
                                    <Box sx={{ mt: .5 }}>
                                        <Typography sx={{ fontSize: 15, lineHeight: '22px', color: 'grey', fontWeight: 400, letterSpacing: .4 }}>Sign in to your account to access personalized services, manage preferences, and stay connected seamlessly.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 3, width: { xs: '100%', md: '80%' }, mx: 'auto' }}>
                                    <Formik
                                        initialValues={{
                                            "email_or_username": "",
                                            "password": "",
                                        }}
                                        onSubmit={handleSignIn}
                                        validationSchema={
                                            Yup.object({
                                                email_or_username: Yup.string()
                                                    .required('Username/Email is required'),
                                                password: Yup.string()
                                                    .required('Password is required')
                                                    .min(6, "Must be at least 6 characters")
                                                    .max(100, "Password maximum 100 characters only Allowed"),
                                            })
                                        }>
                                        {({ isSubmitting, values }) => (
                                            <Form>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Box>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} >
                                                                <Box>
                                                                    <Field
                                                                        component={TextField}
                                                                        name="email_or_username"
                                                                        label="Email / Username"
                                                                        autoComplete="off"
                                                                        inputProps={{ maxLength: 35 }}
                                                                        fullWidth />
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Field
                                                                        component={TextField}
                                                                        fullWidth
                                                                        type={showPassword ? "text" : "password"}
                                                                        label="Password"
                                                                        name="password"
                                                                        value={values.password || ''}
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                    <IconButton
                                                                                        onClick={handleClickShowPassword}
                                                                                        onMouseDown={handleMouseDownPassword}
                                                                                        edge="end"
                                                                                        sx={{ mr: .5 }}>
                                                                                        {showPassword ? (
                                                                                            <VisibilityOutlinedIcon sx={{ fontSize: 20 }} />
                                                                                        ) : (
                                                                                            <VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />
                                                                                        )}
                                                                                    </IconButton>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }} />
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box sx={{ textAlign: 'right', mt: .6, cursor: 'pointer' }} onClick={() => { setIsForgetPassword(true) }}>
                                                            <Typography>Forgot Password?</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                                                        <Button type="submit" size='medium' disabled={isSubmitting} variant="contained" sx={{ color: 'text.default' }}>Join In</Button>
                                                    </Box>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                    <Box>
                                        <Divider sx={{ my: 4, color: 'text.muted' }}>Continue with</Divider>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                            </Box>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Don't have an account? <Typography onClick={() => (setOpen(true), setIsSignin(false))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign up</Typography></Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <ModalBox
                open={open}
                title={'Sign Up'}
                closeBtn
                icon={<LoginOutlinedIcon color='primary' sx={{ fontSize: 20 }} />}
                onClose={() => setOpen(false)}
                sx={{ maxWidth: { xs: '100%', sm: "475px" }, width: '100%', borderRadius: 2, }}>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box>
                            <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ cursor: 'pointer', minWidth: 30, maxWidth: 50 }} alt="" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2rem", }, fontWeight: 600, color: 'primary.main' }}>Quotes</Typography>
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.6rem", }, fontWeight: 500, color: 'text.title' }}>Join Us Today</Typography>
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: 14, sm: 15 }, lineHeight: '22px', color: 'grey', fontWeight: 400, letterSpacing: .4 }}>Sign up now to unlock exclusive features, seamless access, and personalized experiences tailored just for you!</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 4, }}>
                        <Formik
                            initialValues={{
                                "username": "",
                                "password": "",
                                "name": "",
                            }}
                            onSubmit={handleSignUp}
                            validationSchema={
                                Yup.object({
                                    username: Yup.string()
                                        .required('Name is required')
                                        .matches(/^[a-zA-Z\s]+$/, 'Name cannot contain special character and numbers')
                                        .min(3, 'Name must be at least 3 characters')
                                        .max(50, 'Name cannot exceed 50 characters'),
                                    email: Yup.string()
                                        .email('Invalid email address')
                                        .required('Email is required'),
                                    password: Yup.string()
                                        .required('Password is required')
                                        .min(6, "Must be at least 6 characters")
                                        .max(100, "Password maximum 100 characters only Allowed"),
                                })
                            }>
                            {({ isSubmitting, values }) => (
                                <Form>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            name="username"
                                                            value={values.username || ''}
                                                            label="Name"
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            type="email"
                                                            name="email"
                                                            value={values.email || ''}
                                                            label="Email"
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            fullWidth
                                                            type={showPassword ? "text" : "password"}
                                                            label="Password"
                                                            name="password"
                                                            value={values.password || ''}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            onClick={handleClickShowPassword}
                                                                            onMouseDown={handleMouseDownPassword}
                                                                            edge="end"
                                                                            sx={{ mr: .5 }}>
                                                                            {showPassword ? (
                                                                                <VisibilityOutlinedIcon sx={{ fontSize: 20 }} />
                                                                            ) : (
                                                                                <VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />
                                                                            )}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                ),
                                                            }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                                <Box>
                                                    <Button onClick={() => { setOpen(false) }} color='error' size='medium' variant="outlined">Cancel</Button>
                                                </Box>
                                                <Box>
                                                    <Button type="submit" size='medium' disabled={isSubmitting} variant="contained" sx={{ color: 'text.default' }}>Join Us</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                        <Box>
                            <Divider sx={{ my: 4, color: 'text.muted' }}>Continue with</Divider>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                <Box>
                                    <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                </Box>
                                <Box>
                                    <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Already have an account? <Typography onClick={() => (setOpen(false), setIsSignin(true))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign in</Typography></Typography>
                        </Box>
                    </Box>
                </Box>
            </ModalBox>
            <ModalBox
                open={isForgetPassword}
                title={'Forget Password'}
                closeBtn
                icon={<LockPersonIcon color='primary' sx={{ fontSize: 20 }} />}
                onClose={() => setIsForgetPassword(false)}
                sx={{ borderRadius: 2, maxWidth: { xs: '100%', sm: "500px" }, width: '100%', }}>
                <Box>
                    <Formik
                        initialValues={{
                            "email": "",
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string()
                                    .required('Email is required'),
                            })
                        }
                        onSubmit={forgotPassword}
                        enableReinitialize={true}>
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Box sx={{ textAlign: "center", }}>
                                    <Typography sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", }, fontWeight: 500, color: 'text.title' }}>Recover Your Account</Typography>
                                    <Typography sx={{ fontSize: { xs: 14, sm: 15 }, lineHeight: '22px', color: 'text.muted', fontWeight: 400, letterSpacing: .4, mt: 1 }}>Reset your password quickly and securely to regain access to your account. Follow the simple steps to create a new password.</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Field
                                        component={TextField}
                                        fullWidth
                                        sx={{ mt: 2.5 }}
                                        size="small"
                                        name="email"
                                        label="Email *"
                                        inputProps={{
                                            style: { backgroundColor: '#fff' }
                                        }}
                                        InputProps={{
                                            style: { backgroundColor: '#fff' },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <AccountCircleOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Stack gap={1} alignItems="center" sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Button color='error' sx={{ px: 4 }} disabled={isSubmitting} variant="outlined" onClick={() => { setIsForgetPassword(false) }}>Cancel</Button>
                                        <Button color={"primary"} disabled={isSubmitting} type="submit" sx={{ color: 'text.default', px: 4 }} variant="contained">Submit
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

export default Login
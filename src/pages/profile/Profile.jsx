import { Alert, Avatar, Box, Button, CircularProgress, Grid, IconButton, InputAdornment, Paper, Stack, Typography } from "@mui/material"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import 'react-phone-input-2/lib/material.css'
import { TextField } from 'formik-mui';
import { alertMsg } from "../../utils/basicUtils";
import { useState } from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Popup from "../../components/Popup";
import VerifiedIcon from '@mui/icons-material/Verified';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const initialUserInfo = {
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": "",
    "website": "",
    "mobile_number": "",
    "street": "",
    "city": "",
    "state": "",
    "country": "",
    "zipcode": "",
}

const Profile = () => {

    const [selectData, setSelectData] = useState(initialUserInfo);
    const [showPop, setShowPop] = useState(false)
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    console.log(selectData)

    const handleAddTask = async (Values) => {
        try {
            alertMsg('User Created Successfully', 'success')
            console.log(Values)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5} xl={3.5}>
                    <Box sx={{ height: 1 }}>
                        <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 1, height: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton sx={{ backgroundColor: '#07a6980a', color: 'primary.main' }}>
                                    <CameraAltOutlinedIcon />
                                </IconButton>
                                <Typography sx={{ fontSize: 16, color: 'text.secondary', letterSpacing: .3 }}>Upload Profile</Typography>
                            </Box>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Box>
                                    <Avatar sx={{ width: 125, height: 125, mx: 'auto' }} src="https://modernize-nextjs.adminmart.com/images/profile/user-7.jpg" />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography sx={{ fontSize: 18, color: 'text.secondary', letterSpacing: .3, lineHeight: '20px' }}>Ranjith Kumar</Typography>
                                    <Typography sx={{ color: 'text.muted', letterSpacing: .3, lineHeight: '16px', mt: .4 }}>Author</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton sx={{ backgroundColor: '#0000000a' }}>
                                        <EmailOutlinedIcon sx={{ fontSize: 22 }} />
                                    </IconButton>
                                    <Typography sx={{ fontSize: 15, color: 'text.secondary', letterSpacing: .3 }}>ranjithtest@gmail.com</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2.5 }}>
                                    <IconButton sx={{ backgroundColor: '#0000000a' }}>
                                        <LocalPhoneOutlinedIcon sx={{ fontSize: 22 }} />
                                    </IconButton>
                                    <Typography sx={{ fontSize: 15, color: 'text.secondary', letterSpacing: .3 }}>(+256) 4641621651</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2.5 }}>
                                    <IconButton sx={{ backgroundColor: '#0000000a' }}>
                                        <PlaceOutlinedIcon sx={{ fontSize: 22 }} />
                                    </IconButton>
                                    <Typography sx={{ fontSize: 15, color: 'text.secondary', letterSpacing: .3 }}>12 capital, Ontario, Canada, M5E 1W7.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: { xs: 1.5, sm: 3 }, flexWrap: 'wrap' }}>
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
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} xl={8.5}>
                    <Box sx={{ height: 1 }}>
                        <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 1, height: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton sx={{ backgroundColor: '#0288d10a', color: 'info.main' }}>
                                    <PersonOutlineOutlinedIcon />
                                </IconButton>
                                <Typography sx={{ fontSize: 16, color: 'text.secondary', letterSpacing: .3 }}>Personal Information</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Formik
                                    initialValues={selectData}
                                    validationSchema={
                                        Yup.object({
                                            first_name: Yup.string()
                                                .required('First Name is required'),
                                            username: Yup.string()
                                                .required('User Name is required'),
                                            website: Yup.string()
                                                .required('Website is required'),
                                            email: Yup.string().email('Email is invalid')
                                                .required('Email is required'),
                                            mobile_number: Yup.string()
                                                .required('Contact Number is required'),
                                            street: Yup.string()
                                                .required('Street is required'),
                                            city: Yup.string()
                                                .required('City is required'),
                                            state: Yup.string()
                                                .required('State is required'),
                                            country: Yup.string()
                                                .required('Country is required'),
                                            zipcode: Yup.string()
                                                .required('Postal Code is required'),
                                        })
                                    }
                                    onSubmit={handleAddTask}
                                    enableReinitialize={true}>
                                    {({ isSubmitting, values, setFieldValue, errors, touched }) => (
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
                                                                label="Username*"
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
                                                                label="Email*"
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
                                                            <Box>
                                                                <Box sx={{ position: "relative", "& .react-tel-input .form-control": { padding: "10px 14px 10px 58px !important", fontSize: "12px !important", border: '1px solid #dfdfdf !important', borderColor: errors.mobile_number && touched.mobile_number ? '#d32f2f !important' : '#dfdfdf', width: '100% !important', borderRadius: "4px !important", fontWeight: 500 } }}>
                                                                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: 12, transform: "scale(0.75)", bgcolor: "background.default", position: "absolute", zIndex: 1, top: -10, left: -2, px: .4, color: errors.mobile_number && touched.mobile_number ? '#d32f2f !important' : 'text.secondary', }}>Contact Number</Typography>
                                                                    <PhoneInput
                                                                        className="react-tel-input"
                                                                        country={"in"}
                                                                        countryCodeEditable={false}
                                                                        specialLabel=''
                                                                        value={`${values?.mobile_code} ${values?.mobile_number}`}
                                                                        onChange={(phNo, phNoObj) => {
                                                                            setFieldValue("mobile_number", phNo.slice(phNoObj.dialCode.length))
                                                                            setFieldValue("mobile_code", phNoObj.dialCode)
                                                                            setFieldValue("country_code", phNoObj.countryCode)
                                                                        }}
                                                                        fullWidth />
                                                                    <ErrorMessage style={{ fontSize: '0.75rem', color: '#d32f2f', fontWeight: '500', margin: '14px 4px 0px 14px' }} component="span" name="mobile_number" />
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                component={TextField}
                                                                fullWidth
                                                                size="small"
                                                                name="street"
                                                                label="Street*"
                                                                inputProps={{
                                                                    style: { backgroundColor: '#fff' }
                                                                }}
                                                                InputProps={{
                                                                    style: { backgroundColor: '#fff' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <PlaceOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
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
                                                                name="city"
                                                                label="City*"
                                                                inputProps={{
                                                                    style: { backgroundColor: '#fff' }
                                                                }}
                                                                InputProps={{
                                                                    style: { backgroundColor: '#fff' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <PlaceOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
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
                                                                name="state"
                                                                label="State*"
                                                                inputProps={{
                                                                    style: { backgroundColor: '#fff' }
                                                                }}
                                                                InputProps={{
                                                                    style: { backgroundColor: '#fff' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <PlaceOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
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
                                                                name="country"
                                                                label="Country*"
                                                                inputProps={{
                                                                    style: { backgroundColor: '#fff' }
                                                                }}
                                                                InputProps={{
                                                                    style: { backgroundColor: '#fff' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <PlaceOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
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
                                                                name="zipcode"
                                                                label="Postal Code*"
                                                                inputProps={{
                                                                    style: { backgroundColor: '#fff' }
                                                                }}
                                                                InputProps={{
                                                                    style: { backgroundColor: '#fff' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <PlaceOutlinedIcon sx={{ color: "#afafaf", mr: 1.5, fontSize: 20 }} />
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
                                                                label="Website*"
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
                                                    </Grid>
                                                </Box>
                                            </Box>
                                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                                <Button color={"primary"} disabled={isSubmitting} type="submit" sx={{ px: 4, letterSpacing: .3 }} variant="contained">Update Details
                                                    {isSubmitting && <CircularProgress sx={{ width: "20px !important", height: "20px !important", verticalAlign: "middle", ml: 1, color: "grey.500" }} />}
                                                </Button>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} xl={3.5}>
                    <Box sx={{ height: 1 }}>
                        <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 1, height: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton sx={{ backgroundColor: '#d32f2f0a', color: 'error.main' }}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                                <Typography sx={{ fontSize: 16, color: 'text.secondary', letterSpacing: .3 }}>Delete Account</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ color: 'text.secondary', letterSpacing: .3 }}>Deleting your account is irreversible and can affect your past activites.</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography component={"span"} sx={{ color: 'text.secondary', letterSpacing: .3 }}>Do you want to delete  <Typography component={"span"} sx={{ color: 'text.primary', letterSpacing: .3, fontWeight: 600 }}>Osoftz Developer</Typography> user?</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Button onClick={() => { setShowPop(true) }} color="error">Delete Account</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} xl={8.5}>
                    <Box sx={{ height: 1 }}>
                        <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 1, height: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton sx={{ backgroundColor: '#ed6c020a', color: 'warning.main' }}>
                                    <PersonOutlineOutlinedIcon />
                                </IconButton>
                                <Typography sx={{ fontSize: 16, color: 'text.secondary', letterSpacing: .3 }}>Change Password</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Formik
                                                initialValues={{
                                                    "current_password": "",
                                                    "new_password": "",
                                                    "confirm_password": "",
                                                }}
                                                validationSchema={
                                                    Yup.object({
                                                        current_password: Yup.string()
                                                            .required('Current Password is required'),
                                                        new_password: Yup.string()
                                                            .required("New Password is required")
                                                            .min(8, "Must be at least 8 characters")
                                                            .max(100, "New Password cannot exceed 100 characters"),
                                                        confirm_password: Yup.string()
                                                            .required("Confirm New Password is required")
                                                            .oneOf([Yup.ref('new_password'), null], "Passwords doesn't match"),
                                                    })
                                                }
                                                enableReinitialize={true}
                                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                                    try {
                                                        alertMsg("Password Update Successfully", "success")
                                                        resetForm()
                                                        console.log(values)
                                                    }
                                                    catch (err) {
                                                        console.error(err)
                                                    }
                                                    setSubmitting(false)
                                                }}>
                                                {({ isSubmitting }) => (
                                                    <Form style={{ width: '100%' }}>
                                                        <Box sx={{ mb: .5 }}>
                                                            <Field
                                                                component={TextField}
                                                                margin="dense"
                                                                fullWidth
                                                                size="small"
                                                                name="current_password"
                                                                label="Current Password *"
                                                                type={showCurrentPassword ? "text" : "password"}
                                                                InputProps={{
                                                                    // style: { backgroundColor: '#efefefe6' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                onClick={() => { setShowCurrentPassword(prev => !prev) }}
                                                                                onMouseDown={handleMouseDownPassword}
                                                                                edge="end"
                                                                                size="small"
                                                                                sx={{ mr: .5 }}>
                                                                                {showCurrentPassword ? (
                                                                                    <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                ) : (
                                                                                    <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                )}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ mb: .5 }}>
                                                            <Field
                                                                component={TextField}
                                                                margin="dense"
                                                                fullWidth
                                                                size="small"
                                                                name="new_password"
                                                                label="New Password *"
                                                                type={showNewPassword ? "text" : "password"}
                                                                InputProps={{
                                                                    // style: { backgroundColor: '#efefefe6' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                onClick={() => { setShowNewPassword(prev => !prev) }}
                                                                                onMouseDown={handleMouseDownPassword}
                                                                                edge="end"
                                                                                size="small"
                                                                                sx={{ mr: .5 }}>
                                                                                {showNewPassword ? (
                                                                                    <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                ) : (
                                                                                    <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                )}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Field
                                                                component={TextField}
                                                                margin="dense"
                                                                fullWidth
                                                                size="small"
                                                                name="confirm_password"
                                                                label="Confirm New Password *"
                                                                type={showConfirmPassword ? "text" : "password"}
                                                                InputProps={{
                                                                    // style: { backgroundColor: '#efefefe6' },
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                onClick={() => { setShowConfirmPassword(prev => !prev) }}
                                                                                onMouseDown={handleMouseDownPassword}
                                                                                edge="end"
                                                                                size="small"
                                                                                sx={{ mr: .5 }} >
                                                                                {showConfirmPassword ? (
                                                                                    <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                ) : (
                                                                                    <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                                                                )}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                        </Box>
                                                        <Box sx={{ mt: 2 }}>
                                                            <Button disabled={isSubmitting}
                                                                variant="contained"
                                                                // fullWidth
                                                                type='submit'
                                                                color="primary">Update Password</Button>
                                                        </Box>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>To keep your account secure, we recommend you follow these best practices:</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "text.secondary", letterSpacing: .3, mt: .4 }}>Password must contain</Typography>
                                        </Box>
                                        <Box sx={{ mt: 1 }}>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                <Box sx={{ height: "20px" }}>
                                                    <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>At least 8 characters</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                <Box sx={{ height: "20px" }}>
                                                    <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>At least one lowercase letter (a-z)</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                <Box sx={{ height: "20px" }}>
                                                    <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>At least one uppercase letter (A-Z)</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                <Box sx={{ height: "20px" }}>
                                                    <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>At least one number (0-9)</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: "center", mb: 1 }}>
                                                <Box sx={{ height: "20px" }}>
                                                    <VerifiedIcon sx={{ fontSize: "20px", color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: "text.secondary", letterSpacing: .3 }}>At least one special character</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

            <Popup show={showPop} title='Delete Account' consent={true} variant='error' primaryBtnTxt='delete'
                onSecondaryClick={() => { setShowPop(false) }}>
                <Box>
                    <Typography sx={{ color: 'text.muted', letterSpacing: .3, fontSize: 15 }}>
                        <Typography component={'span'} sx={{ color: 'text.muted', letterSpacing: .3, fontSize: 15 }}>This action will permanently delete your Account </Typography>
                        Do you want to delete <Typography component={'span'} sx={{ fontWeight: 600, color: "text.title", letterSpacing: .3, fontSize: 15 }}>Ranjith Kumar</Typography> Account?</Typography>
                </Box>
            </Popup>
        </Box>
    )
}

export default Profile
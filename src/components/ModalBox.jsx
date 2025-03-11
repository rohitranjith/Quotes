import { forwardRef } from 'react';
import { Box, Dialog, Typography, Slide, IconButton, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const ModalBox = ({ children, open, onClose, sx, title, subtitle, closeBtn = false, icon }) => {
    const style = {
        width: '27%',
        outline: "none",
        backgroundColor: "#fff",
        borderRadius: 2.5,
        border: 1,
        borderColor: "divider",
        boxShadow: "-1px 2px 20px 3px #00000025",
        overflow: 'auto',
        "& *": { boxSizing: "border-box" },
        '@media (max-width: 1400px)': {
            width: '40%',
        },
        '@media (max-width: 1200px)': {
            width: '66%',
        },
        '@media (max-width: 768px)': {
            width: '100%',
            margin: '10px'
        },
        ...sx
    };

    return (
        <Dialog
            open={Boolean(open)}
            TransitionComponent={Transition}
            onClose={onClose}
            maxWidth={"none"}
            PaperProps={{
                sx: { ...style },
                className: 'scroll-bar'
            }}>
            <Box>
                {
                    title && <Stack direction={'row'} sx={{ borderRadius: 2.8, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, py: 1.2, minHeight: 50, justifyContent: 'end', alignItems: subtitle ? 'start' : 'center', position: 'sticky', top: 0, left: 0, borderBottom: '1px solid #ebebeb', backgroundColor: '#fff', zIndex: 2, px: 1.5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'background.light', borderRadius: '50%' }}>
                                    {
                                        icon
                                    }
                                </Box>
                                <Box>
                                    <Typography color="text.title" sx={{ fontSize: { xs: 16, sm: 18 }, maxLines: 1, letterSpacing: .3 }}>{title}</Typography>
                                    {subtitle && <Typography color="text.title" sx={{ fontSize: 13 }}>{subtitle}</Typography>}
                                </Box>
                            </Box>
                        </Box>
                        {
                            closeBtn && <Box>
                                <IconButton onClick={onClose} size='small' >
                                    <CloseIcon sx={{ fontSize: 22 }} />
                                </IconButton>
                            </Box>
                        }
                    </Stack>
                }
                <Box className='modal-child' sx={{ "& > div": { py: 3, px: { xs: 1.5, sm: 3 } }, bgcolor: '#fff', position: 'relative', ".MuiInputBase-root": { minHeight: 38 }, '& .modal-footer': {} }}>
                    {children}
                </Box>
            </Box>
        </Dialog >
    )
}

export default ModalBox


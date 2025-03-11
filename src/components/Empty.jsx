import { Typography, Paper, Box, Stack } from '@mui/material';
import emptyImage from '../assets/empty.svg'

const Empty = ({ text, children, sx, contentText }) => {
    return (
        <Stack component={Paper} sx={{ borderRadius: 3, px: { xs: 2, md: 3 }, py: { xs: 2, sm: 3, md: 5 }, alignItems: "center", justifyContent: "center", textAlign: "center", ...sx, }}>
            <Stack >
                <Box component="img" src={emptyImage} sx={{ height: { xs: 325, sm: 400 } }}></Box>
            </Stack>
            <Typography variant="h5" sx={{ fontSize: { xs: 20, sm: 22, md: 26 }, mt: 3, fontWeight: 600 }} color="text.title">{text}</Typography>
            <Typography variant="body2" sx={{ mt: 1.6, mx: "auto", fontSize: 16, color: 'grey', letterSpacing: .4 }}>
                {contentText ? contentText : "Currently, no content is available. Please add data to populate your space."}
            </Typography>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export default Empty
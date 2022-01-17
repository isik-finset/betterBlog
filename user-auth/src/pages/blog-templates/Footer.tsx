// MUI
import { Typography, Link } from '@mui/material'

// ------------------------------------------------------------------------------------

export default function Footer(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{ minHeight: '50px', marginTop: "auto" }}>
            {'Copyright © '}
            <Link color="inherit" href="https://isik-tech.com">
                isik-tech
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
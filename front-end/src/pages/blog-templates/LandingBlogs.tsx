// MUI
import { Box, Typography, styled } from '@mui/material';

// react-router-dom
import { Link } from 'react-router-dom';

// ------------------------------------------------------------------------------------

const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
    color: 'black',
}))

// ------------------------------------------------------------------------------------
interface LandingPageBlogsProps {
    props: {
        id: string;
        createdDt: string;
        firstName: string;
        lastName: string;
        title: string;
        description: string;
        topic: string
    }
}

// ------------------------------------------------------------------------------------

const Blogs = ({ props }: LandingPageBlogsProps) => {

    const { title, description, topic, createdDt, id, firstName, lastName } = props;

    return (
        <Box marginBottom="20px">
            <Typography variant="caption">
                By {firstName} {lastName}
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ cursor: "pointer" }} >
                <StyledLink to={`/single-post/${id}`} state={{ state: props }}>
                    {title}
                </StyledLink>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {createdDt.split('T')[0]} ( {6} min read )
            </Typography>
            <Typography variant='caption' color='text.primary' paragraph>
                {topic}
            </Typography>
        </Box>
    )
}

export default Blogs;
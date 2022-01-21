// MUI
import { Box, Typography, useTheme, styled } from '@mui/material';

// react-router-dom
import { Link } from 'react-router-dom';

// ------------------------------------------------------------------------------------

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: 'black',
}))


// ------------------------------------------------------------------------------------
interface LandingPageBlogsProps {
    props: {
        // _id: number;
        id: string;
        authorId: string;
        createdAt: string;
        // firstName: string;
        // lastName: string;
        title: string;
        description: string;
        topic: string
        // readTime: string;
    }
}

// ------------------------------------------------------------------------------------

const Blogs = ({ props }: LandingPageBlogsProps) => {
    const theme = useTheme();

    const { title, description, topic, createdAt, id, authorId } = props;

    return (
        <Box marginBottom="20px">
            {/* <Typography variant="caption">
                By {firstName} {lastName}
            </Typography> */}
            <Typography variant="h6" fontWeight="bold" sx={{ cursor: "pointer" }} >
                <StyledLink to={`/single-post/${id}`} state={{ state: props }}>
                    {title}
                </StyledLink>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {description}
            </Typography>
            {/* <Typography variant="caption" color="text.secondary">
                {createdAt} ( {readTime} min read )
            </Typography> */}
            <Typography variant='caption' color='text.primary' paragraph>
                {topic}
            </Typography>
        </Box>
    )
}

export default Blogs;
// MUI
import { Box, Typography, styled, useTheme } from '@mui/material';

// react-router-dom
import { Link } from 'react-router-dom';

// ------------------------------------------------------------------------------------

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: 'black',
}))


// ------------------------------------------------------------------------------------
interface MyBlogsProps {
    props: {
        _id: number;
        id: string;
        title: string;
        description: string;
        body: string;
        firstName: string;
        lastName: string;
        createdAt: string;
        topic: string;
        readTime: string;
    }
}

// ------------------------------------------------------------------------------------

const MyBlogs = ({ props }: MyBlogsProps) => {

    const { title, description, firstName, lastName, topic, readTime, createdAt, id, _id } = props;

    return (
        <Box marginBottom={"20px"}>
            <Typography variant="caption">
                By {firstName} {lastName}
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ cursor: "pointer" }}>
                <StyledLink to={`/single-post/${_id}`} state={{ state: props }}>
                    {title}
                </StyledLink>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {createdAt} ( {readTime} min read )
            </Typography>
            <Typography variant="caption" color="text.primary" paragraph>
                {topic}
            </Typography>
        </Box>
    )
}

export default MyBlogs;
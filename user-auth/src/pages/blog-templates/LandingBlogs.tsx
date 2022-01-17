// MUI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


// ------------------------------------------------------------------------------------
interface LandingPageBlogsProps {
    props: {
        title: string;
        description: string;
        firstName: string;
        lastName: string;
        createdAt: string;
        topic: string;
        readTime: string;
    }
}

// ------------------------------------------------------------------------------------

const Blogs = ({ props }: LandingPageBlogsProps) => {

    const { title, description, firstName, lastName, topic, readTime, createdAt } = props;

    return (
        <Box marginBottom="20px">
            <Typography variant="caption">
                By {firstName} {lastName}
            </Typography>
            <Typography variant="h6" fontWeight="bold" >
                {title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {createdAt} ( {readTime} min read )
            </Typography>
        </Box>
    )
}

export default Blogs;
// MUI
import { Typography, Divider, Box } from '@mui/material'

// template
import { imageFeaturePost } from './ImageFeaturePost'
import ImageFeature from './ImageFeature';

// ------------------------------------------------------------------------------------
interface BlogProps {
    props: {
        title: string;
        description: string;
        body: string;   // ReadonlyArray<string>;
        firstName: string;
        lastName: string;
        createdAt: string;
        topic: string;
        readTime: string;
    }
}

// ------------------------------------------------------------------------------------

const Blog = ({ props }: BlogProps) => {

    const { title, body, description, firstName, lastName, topic, readTime, createdAt } = props;

    return (
        <Box  >
            <ImageFeature post={imageFeaturePost} />
            <Divider sx={{ mb: '15px' }} />
            <Typography variant='h3' gutterBottom>
                {title}
            </Typography>

            <Box>
                <Typography variant="caption">
                    By {firstName} {lastName}
                </Typography>
                <br />
                <Typography variant="caption" color="text.secondary">
                    {createdAt} ( {readTime} min read )
                </Typography>
            </Box>
            <Box my={3}>
                <Typography variant="h6" color="text.secondary">
                    {description}
                </Typography>
            </Box>
            <Box >
                <Typography variant="body2" color="inherit" paragraph>
                    {body}
                </Typography>
            </Box>
        </Box >
    )
}

export default Blog;
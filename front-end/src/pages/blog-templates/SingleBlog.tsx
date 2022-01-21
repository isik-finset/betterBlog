// MUI
import { Typography, Divider, Box } from '@mui/material'

// template
import { imageFeaturePost } from './ImageFeaturePost'
import ImageFeature from './ImageFeature';

// ------------------------------------------------------------------------------------
interface BlogProps {
    props: {
        // _id: number,
        id: string;
        createdAt: string;
        // firstName: string;
        // lastName: string;
        // email: string;
        title: string;
        description: string;
        body: string
        topic: string
        // readTime: string;
    }
}

// ------------------------------------------------------------------------------------

const Blog = ({ props }: BlogProps) => {

    const { title, body, description, topic, createdAt } = props;

    return (
        <Box  >
            <ImageFeature post={imageFeaturePost} />
            <Divider sx={{ mb: '15px' }} />
            <Typography variant='h3' gutterBottom>
                {title}
            </Typography>

            <Box>
                {/* <Typography variant="caption">
                    By {firstName} {lastName}
                </Typography> */}
                <br />
                {/* <Typography variant="caption" color="text.secondary">
                    {createdAt} ( {readTime} min read )
                </Typography> */}
                <br />
                <Typography variant='caption' color="text.primary" paragraph>
                    {topic}
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
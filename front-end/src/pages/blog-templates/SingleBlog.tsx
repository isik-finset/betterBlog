// MUI
import { Typography, Divider, Box } from '@mui/material'

// template
import { imageFeaturePost } from './ImageFeaturePost'
import ImageFeature from './ImageFeature';

// ------------------------------------------------------------------------------------
interface BlogProps {
    props: {
        id: string;
        createdDt: string;
        firstName: string;
        lastName: string;
        title: string;
        description: string;
        body: string
        topic: string
    }
}

// ------------------------------------------------------------------------------------

const Blog = ({ props }: BlogProps) => {

    const { title, body, description, topic, firstName, lastName, createdDt } = props;

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
                    { createdDt ? (createdDt.split('T')[0])  :  null } {''}
                      ({6} min read)   
                </Typography>
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
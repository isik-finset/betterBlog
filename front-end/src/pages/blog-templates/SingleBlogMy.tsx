// MUI
import { Typography, Divider, Box, Button, Grid } from '@mui/material'

// react-router-dom
import { useNavigate } from 'react-router';

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

const BlogMy = ({ props }: BlogProps) => { 

    const { title, body, description, topic, firstName, lastName, createdDt, id } = props;
    const navigate = useNavigate();

    return (
        <Box  >
            <ImageFeature post={imageFeaturePost} />
            <Divider sx={{ mb: '15px' }} />
            <Grid container justifyContent="flex-end" >
                <Grid item sx={{ my: 2, mx: 0 }}>
                    <Button
                        onClick={() => navigate(`/edit-post`, { state: id })}
                        variant="contained"
                    >
                        Edit
                    </Button>
                </Grid>
            </Grid>
            <Typography variant='h3' gutterBottom>
                {title}
            </Typography>

            <Box>
                <Typography variant="caption">
                    By {firstName} {lastName}
                </Typography>
                <br />
                <Typography variant="caption" color="text.secondary">
                    { createdDt ? (createdDt.split('T')[0]) : null } {''}
                    ( {6} min read ) 
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

export default BlogMy;
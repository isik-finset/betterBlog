// react
import { useEffect, useState } from 'react';

// MUI
import { Box, Container, Grid, TextField, Button } from '@mui/material'

// hooks
import { useForm } from 'react-hook-form'

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom'

// axios
import { axiosInst } from 'src/utils/axios'


// ------------------------------------------------------------------------------------

interface BlogType {
    title: string;
    description: string;
    body: string
    topic: string
}

// ------------------------------------------------------------------------------------

const Edit = () => {
    const [list, setList] = useState<BlogType>(Object);
    const { handleSubmit, register } = useForm<BlogType>()
    const location = useLocation();
    const navigate = useNavigate()
    const bearer = localStorage.getItem('token');

    // get post
    useEffect(() => {
        axiosInst
            .get(`/posts/${location.state}`)
            .then((data) => {
                console.log(data);
                setList(data.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])


    // update post
    const onSubmit = async (data: BlogType) => {
        try {
            const result = await axiosInst.patch(`/posts/${location.state}`,
                {
                    title: data.title,
                    description: data.description,
                    body: data.body,
                    topic: data.topic
                },
                {
                    headers: { Authorization: 'Bearer ' + bearer }
                })
            console.log(result);
            if (result.status === 200) {
                console.log('You can add rerouting in here');
            }
        } catch (e) {
            console.error(e)
        }
        alert(JSON.stringify(data))
    }

    // update post
    const deletePost = async () => {
        try {
            const result = await axiosInst.delete(`/posts/${location.state}`,
                {
                    headers: { Authorization: 'Bearer ' + bearer }
                })
            console.log(result);
            if (result.status === 200) {
                console.log('You can add rerouting in here');
                navigate('/my-posts')
            }
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <Container maxWidth="md">
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 5 }}>
                <Grid container justifyContent="flex-end" sx={{ mb: 5 }} >
                    <Grid item sx={{ my: 2, mx: 0 }}>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Save Changes
                        </Button>
                    </Grid>
                    <Grid item sx={{ my: 2, ml: "10px" }}>
                        <Button
                            onClick={() => deletePost()}
                            variant="outlined"
                        >
                            Remove Blog
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={10} mb={5}>
                    <Grid item xs={12} >
                        <TextField
                            variant="standard"
                            id="title"
                            placeholder="Give your blog a title..."
                            fullWidth
                            required
                            autoFocus
                            {...register('title')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='standard'
                            id="description"
                            placeholder="Write a short description..."
                            multiline
                            required
                            fullWidth
                            {...register('description')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            id="body"
                            placeholder="Tell your story..."
                            multiline
                            required
                            fullWidth
                            {...register('body')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            id="topic"
                            placeholder="Topic, in a single word..."
                            multiline
                            required
                            fullWidth
                            {...register('topic')}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default Edit;
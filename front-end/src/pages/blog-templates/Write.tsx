// MUI
import { Box, Container, Grid, TextField, Button } from '@mui/material';

// hooks
import { useForm } from 'react-hook-form';

// react
import { useEffect, useState } from 'react';

// axios
import { axiosInst } from 'src/utils/axios';

// react-router-dom
import { useNavigate } from 'react-router-dom';

// ------------------------------------------------------------------------------------

interface AuthorData {
  id: number;
  firstName: string;
  lastName: string;
}

interface Blog {
  title: string;
  description: string;
  body: string;
  topic: string;
  id: number;
  firstName: string;
  lastName: string;
}

const Write = () => {

  const [author, setAuthor] = useState<AuthorData>(Object);
  const { handleSubmit, register } = useForm<Blog>();
  const userId = localStorage.getItem('id');
  const bearer = localStorage.getItem('token');
  const navigate = useNavigate();

  // get author data
  useEffect(() => {
    axiosInst
      .get(`user/${userId}`, { headers: { Authorization: 'Bearer ' + bearer } })
      .then((data) => {
        setAuthor(data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [userId, bearer]);

  // post data
  const onSubmit = async (data: Blog) => {
    try {
      const result = await axiosInst.post(
        'posts/create',
        {
          firstName: author.firstName,
          lastName: author.lastName,
          authorId: Number(author.id),
          title: data.title,
          body: data.body,
          description: data.description,
          topic: data.topic,
        },
        { headers: { Authorization: 'Bearer ' + bearer } }
      );
      console.log(result);
      if (result.status === 201) {
        console.log('You can add rerouting in here');
        navigate('/my-posts')
      }
    } catch (e) {
      console.error(e);
    }
    // alert(JSON.stringify(data))
  };

  return (
    <Container maxWidth="md">
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 5 }}>
        <Grid container justifyContent="flex-end" sx={{ mb: 5 }}>
          <Grid item sx={{ my: 2 }}>
            <Button type="submit" fullWidth variant="contained">
              Publish
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12}>
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
              variant="standard"
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
  );
};

export default Write;

// MUI
import { Box, Container, Grid, TextField, Button } from '@mui/material';

// hooks
import useBlog from 'src/hooks/useBlog';

// ------------------------------------------------------------------------------------

const Write = () => {

    const { blog, handleChange, handleSubmit } = useBlog({ title: "", description: "", body: "", topic: "" })
    const { title, description, body, topic } = blog;

    return (

        <Container maxWidth="md">
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
                <Grid container justifyContent="flex-end" sx={{ mb: 5 }}>
                    <Grid item sx={{ my: 2 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Publish
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={12} >
                        <TextField
                            variant="standard"
                            name="title"
                            id="title"
                            // label="Title"
                            placeholder="Give your blog a title..."
                            fullWidth
                            required
                            autoFocus
                            value={title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='standard'
                            name="description"
                            id="description"
                            // label="Description"
                            placeholder="Write a short description..."
                            multiline
                            required
                            fullWidth
                            value={description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            name="body"
                            id="body"
                            // label="Body"
                            placeholder="Tell your story..."
                            multiline
                            required
                            fullWidth
                            value={body}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            id="topic"
                            // label="Topic"
                            name="topic"
                            placeholder="Topic, in a single word..."
                            multiline
                            required
                            fullWidth
                            value={topic}
                            onChange={handleChange}
                        />
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
};

export default Write;
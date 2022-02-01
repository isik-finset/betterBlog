// react
import { useState, useEffect } from 'react';
// MUI
import { Box, Container } from '@mui/material'
// axios
import { axiosInst } from 'src/utils/axios';
// components
import Page from 'src/components/Page';
// templates
import MyBlogs from './blog-templates/MyBlogs'
import ImageFeature from './blog-templates/ImageFeature';
import { imageFeaturePost } from './blog-templates/ImageFeaturePost';
import Footer from './blog-templates/Footer';



// ------------------------------------------------------------------------------------
interface MyPostsProps {
    id: string;
    createdDt: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    topic: string
};

// ------------------------------------------------------------------------------------

export default function MyPosts() {

    const [list, setList] = useState<MyPostsProps[]>([])
    const userId = localStorage.getItem('id')
    const bearer = localStorage.getItem('token')

    useEffect(() => {
        axiosInst
            .get(`user/${userId}/posts`, { headers: { 'Authorization': 'Bearer ' + bearer } })
            .then((data) => {
                console.log(data);
                setList(data.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [userId, bearer])

    return (
        <Page title="Single Post Page">
            <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box>
                    <ImageFeature post={imageFeaturePost} />
                    {list.map((item, i, arr) => (
                        <MyBlogs key={item.id} props={item} />
                    )
                    )}
                </Box>
            </Container>
            <Footer />
        </Page>
    )
};




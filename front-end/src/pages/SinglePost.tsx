// react
import React, { useState, useEffect } from 'react';
// react-router-dom
import { useLocation } from 'react-router-dom';
// MUI
import { Box, Container } from '@mui/material'
// axios
import axiosInstance from 'src/utils/axios';
// components
import Page from 'src/components/Page';
// templates
import SingleBlog from './blog-templates/SingleBlog'
import Footer from './blog-templates/Footer';

// ------------------------------------------------------------------------------------
interface BlogType {
    _id: number,
    id: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    description: string;
    body: string
    topic: string
    readTime: string;
};

// ------------------------------------------------------------------------------------

export default function SinglePost() {

    const [list, setList] = useState<BlogType[]>([])
    const { state }: any = useLocation(); // review needed

    // useEffect(() => {
    //     axiosInstance
    //     .get('/api/account/single-post/:_id')
    //     .then(({ data }) => {
    //         console.log(data);
    //         setList(data.items);
    //     })
    //     .catch((e) => {
    //         console.error(e);
    //     });
    // }, [])


    return (
        <Page title="Single Post Page">
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
                <Box>
                    <SingleBlog props={ state.state } />
                </Box>
            </Container>
            <Footer />
        </Page>
    )
};




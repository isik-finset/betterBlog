// react
import React, { useState, useEffect } from 'react';
// react-router-dom
import { useLocation } from 'react-router-dom';
// MUI
import { Box, Container } from '@mui/material'
// axios
import { axiosInst } from 'src/utils/axios';
// components
import Page from 'src/components/Page';
// templates
import SingleBlogMy from './blog-templates/SingleBlogMy'
import Footer from './blog-templates/Footer';

// ------------------------------------------------------------------------------------
interface BlogType {
    // _id: number,
    // email: string;
    // readTime: string;
    id: string;
    createdDt: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    body: string
    topic: string
};

// ------------------------------------------------------------------------------------

export default function SinglePostMy() {
    const [list, setList] = useState<any[]>([]) //FIXME: Type needs to be fixed

    const { state }: any = useLocation(); // review needed
    const postID = state.state.id;

    useEffect(() => {
        axiosInst
            .get(`/posts/${postID}`)
            .then((data) => {
                console.log(data);
                setList(data.data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [postID])

    return (
        <Page title="Single Post Page">
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
                <Box>
                    <SingleBlogMy props={list} />
                </Box>
            </Container>
            <Footer />
        </Page>
    )
};




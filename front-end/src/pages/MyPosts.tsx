// react
import React, { useState, useEffect } from 'react';
// MUI
import { Box, Container } from '@mui/material'
// axios
import axiosInstance from 'src/utils/axios';
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
    createdAt: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    body: string;
    topic: string;
    readTime: string;
};

// ------------------------------------------------------------------------------------

export default function MyPosts() {

    const [list, setList] = useState<MyPostsProps[]>([])

    const testProps = [{
        _id: 1,
        id: '1',
        title: 'Most Americans Have No Clue What Immunocompromised Means',
        description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
        body: "Aliquip qui aliqua commodo laborum sit ullamco magna adipisicing veniam eiusmod esse. Laboris minim commodo magna consequat consequat laboris voluptate ad elit. Cupidatat qui tempor cupidatat eu commodo magna sunt cupidatat ea ullamco ut Lorem mollit. Do laborum consectetur ullamco ipsum in. Culpa eu dolor nulla proident consequat tempor cillum ea ut et. Culpa sit ullamco ullamco duis do occaecat amet mollit proident aute non duis ad veniam. Veniam cillum non consectetur sint ut fugiat culpa deserunt. Laborum elit et non incididunt Lorem anim. Amet enim fugiat magna id exercitation Lorem. Ex deserunt aliqua reprehenderit aliquip deserunt do nostrud duis laboris enim ex sit esse. Laborum sit qui nostrud occaecat aliquip laboris qui proident minim. Cupidatat id excepteur ex laboris deserunt ipsum. Amet est labore veniam quis aliquip elit et non in nisi et. Nostrud aute dolore nulla mollit dolor commodo et ea mollit sunt deserunt nostrud excepteur nulla. Veniam voluptate ad deserunt cillum ut fugiat enim in consectetur quis pariatur. Labore ex aute amet sint consequat consequat magna id occaecat Lorem. Pariatur incididunt velit ipsum exercitation officia. Nisi id labore elit ullamco. Et anim excepteur excepteur occaecat voluptate non. Proident culpa laboris Lorem id velit nulla laborum mollit do. Esse qui consectetur et velit excepteur irure incididunt irure et Lorem sit Lorem laborum. Est veniam ex eu cupidatat modo laborum sit ullamco magna adipisicing veniam eiusmod esse. Laboris minim commodo magna consequat consequat laboris voluptate ad elit. Cupidatat qui tempor cupidatat eu commodo magna sunt cupidatat ea ullamco ut Lorem mollit. Do laborum consectetur ullamco ipsum in. Culpa eu dolor nulla proident consequat tempor cillum ea ut et. Culpa sit ullamco ullamco duis do occaecat amet mollit proident aute non duis ad veniam. Veniam cillum non consectetur sint ut fugiat culpa deserunt. Laborum elit et non incididunt Lorem anim. Amet enim fugiat magna id exercitation Lorem. Ex deserunt aliqua reprehenderit aliquip deserunt do nostrud duis laboris enim ex sit esse. Laborum sit qui nostrud occaecat aliquip laboris qui proident minim. Cupidatat id excepteur ex laboris deserunt ipsum. Amet est labore veniam quis aliquip elit et non in nisi et. Nostrud aute dolore nulla mollit dolor commodo et ea mollit sunt deserunt nostrud excepteur nulla. Veniam voluptate ad deserunt cillum ut fugiat enim in consectetur quis pariatur. Labore ex aute amet sint consequat consequat magna id occaecat Lorem. Pariatur incididunt velit ipsum exercitation officia. Nisi id labore elit ullamco. Et anim excepteur excepteur occaecat voluptate non. Proident culpa laboris Lorem id velit nulla laborum mollit do. Esse qui consectetur et velit excepteur irure incididunt irure et Lorem sit Lorem laborum. Est veniam ex eu.",
        topic: 'React',
        firstName: 'Mark',
        lastName: 'Cuban',
        createdAt: 'January 13, 2022',
        readTime: '6'
    },
    {
        _id: 2,
        id: '2',
        title: 'Most Americans Have No Clue What Immunocompromised Means',
        description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
        body: "Aliquip qui aliqua commodo laborum sit ullamco magna adipisicing veniam eiusmod esse. Laboris minim commodo magna consequat consequat laboris voluptate ad elit. Cupidatat qui tempor cupidatat eu commodo magna sunt cupidatat ea ullamco ut Lorem mollit. Do laborum consectetur ullamco ipsum in. Culpa eu dolor nulla proident consequat tempor cillum ea ut et. Culpa sit ullamco ullamco duis do occaecat amet mollit proident aute non duis ad veniam. Veniam cillum non consectetur sint ut fugiat culpa deserunt. Laborum elit et non incididunt Lorem anim. Amet enim fugiat magna id exercitation Lorem. Ex deserunt aliqua reprehenderit aliquip deserunt do nostrud duis laboris enim ex sit esse. Laborum sit qui nostrud occaecat aliquip laboris qui proident minim. Cupidatat id excepteur ex laboris deserunt ipsum. Amet est labore veniam quis aliquip elit et non in nisi et. Nostrud aute dolore nulla mollit dolor commodo et ea mollit sunt deserunt nostrud excepteur nulla. Veniam voluptate ad deserunt cillum ut fugiat enim in consectetur quis pariatur. Labore ex aute amet sint consequat consequat magna id occaecat Lorem. Pariatur incididunt velit ipsum exercitation officia. Nisi id labore elit ullamco. Et anim excepteur excepteur occaecat voluptate non. Proident culpa laboris Lorem id velit nulla laborum mollit do. Esse qui consectetur et velit excepteur irure incididunt irure et Lorem sit Lorem laborum. Est veniam ex eu cupidatat modo laborum sit ullamco magna adipisicing veniam eiusmod esse. Laboris minim commodo magna consequat consequat laboris voluptate ad elit. Cupidatat qui tempor cupidatat eu commodo magna sunt cupidatat ea ullamco ut Lorem mollit. Do laborum consectetur ullamco ipsum in. Culpa eu dolor nulla proident consequat tempor cillum ea ut et. Culpa sit ullamco ullamco duis do occaecat amet mollit proident aute non duis ad veniam. Veniam cillum non consectetur sint ut fugiat culpa deserunt. Laborum elit et non incididunt Lorem anim. Amet enim fugiat magna id exercitation Lorem. Ex deserunt aliqua reprehenderit aliquip deserunt do nostrud duis laboris enim ex sit esse. Laborum sit qui nostrud occaecat aliquip laboris qui proident minim. Cupidatat id excepteur ex laboris deserunt ipsum. Amet est labore veniam quis aliquip elit et non in nisi et. Nostrud aute dolore nulla mollit dolor commodo et ea mollit sunt deserunt nostrud excepteur nulla. Veniam voluptate ad deserunt cillum ut fugiat enim in consectetur quis pariatur. Labore ex aute amet sint consequat consequat magna id occaecat Lorem. Pariatur incididunt velit ipsum exercitation officia. Nisi id labore elit ullamco. Et anim excepteur excepteur occaecat voluptate non. Proident culpa laboris Lorem id velit nulla laborum mollit do. Esse qui consectetur et velit excepteur irure incididunt irure et Lorem sit Lorem laborum. Est veniam ex eu.",
        topic: 'Vue',
        firstName: 'Josh',
        lastName: 'Cuban',
        createdAt: 'January 13, 2022',
        readTime: '6'
    },
    ]

    // useEffect(() => {
    //     axiosInstance
    //     .get('/api/account/myposts')
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
            <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box>
                    <ImageFeature post={imageFeaturePost} />
                    {testProps.map((item, i, arr) => (
                        <MyBlogs key={item.id} props={item} />
                    )
                    )}
                </Box>
            </Container>
            <Footer />
        </Page>
    )
};




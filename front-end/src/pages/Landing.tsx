// react
import { useState, useEffect } from 'react';

// axios
import axiosInstance from 'src/utils/axios';

// MUI
import { Box } from '@mui/material'

// components
import Page from 'src/components/Page';

// templates
import Blogs from './blog-templates/LandingBlogs'
import ImageFeature from './blog-templates/ImageFeature';
import { imageFeaturePost } from './blog-templates/ImageFeaturePost';


import Container from '@mui/material/Container';
import Footer from './blog-templates/Footer';



// ------------------------------------------------------------------------------------
interface LandingPageType {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  topic: string
  readTime: string;
};

// ------------------------------------------------------------------------------------

export default function LandingPage() {

  const [list, setList] = useState<LandingPageType[]>([])

  const testProps = [{
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'React',
    firstName: 'Mark',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  },
  {
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'Vue',
    firstName: 'Josh',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  },
  {
    title: 'Most Americans Have No Clue What Immunocompromised Means',
    description: 'Let’s understand who the immunocompromised are. And this is a very lazy description for the blog',
    topic: 'Angular',
    firstName: 'Ken',
    lastName: 'Cuban',
    createdAt: 'January 13, 2022',
    readTime: '6'
  }
  ]

  // useEffect(() => {
  //     axiosInstance
  //     .get('/api/account/posts')
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
            <Blogs key={i} props={item} />
          )
          )}
        </Box>
      </Container>
      <Footer />
    </Page>
  )
};




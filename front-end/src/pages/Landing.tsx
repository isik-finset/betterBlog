// react
import { useState, useEffect } from 'react';

// axios
import { axiosInst } from 'src/utils/axios';

// MUI
import { Box, Container } from '@mui/material'

// components
import Page from 'src/components/Page';

// templates
import Blogs from './blog-templates/LandingBlogs'
import ImageFeature from './blog-templates/ImageFeature';
import { imageFeaturePost } from './blog-templates/ImageFeaturePost';
import Footer from './blog-templates/Footer';

// ------------------------------------------------------------------------------------
interface LandingPageType {
  id: string;
  createdDt: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  topic: string
};

// ------------------------------------------------------------------------------------

export default function LandingPage() {

  const [list, setList] = useState<LandingPageType[]>([])

  useEffect(() => {
    axiosInst
      .get('/posts')
      .then((data) => {
        setList(data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [])

  console.log(list);
  return (
    <Page title="Single Post Page">
      <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box>
          <ImageFeature post={imageFeaturePost} />
          {list.map((item, i, arr) => (
            <Blogs key={item.id} props={item} />
          )
          )}
        </Box>
      </Container>
      <Footer />
    </Page>
  )
};




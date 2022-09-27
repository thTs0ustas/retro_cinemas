import { Box } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';

import { Navigation } from '../components/navigation';
import { PlayingTodayCarousel } from '../components/playingTodayCarousel';
import { TopHeaderBar } from '../components/topHeaderBar';

function Home() {
  return (
    <div>
      <Head>
        <title>Retro Cinemas</title>
        <meta name='description' content='A cinema for retro people!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <TopHeaderBar />
        <Navigation />
      </Box>
      <PlayingTodayCarousel />
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
export default Home;

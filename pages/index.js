import { Box } from '@mui/material';
import Head from 'next/head';
import { Navigation } from '../components/navigation';
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
    </div>
  );
}
export default Home;

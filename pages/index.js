import { Box } from '@mui/material';
import Head from 'next/head';
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
      </Box>
    </div>
  );
}
export default Home;

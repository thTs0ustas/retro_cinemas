import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
// import { useState } from 'react';
import styles from './styles';

function Navigation() {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={styles.iconButton}>
            <Image
              src='/images/logo.png'
              alt='Retro Cinemas'
              width={170}
              height={40}
            />
          </IconButton>
          <Box sx={styles.links}>
            <Link href='/now-playing'>
              <MuiLink sx={styles.link}>Now Playing</MuiLink>
            </Link>
            <Link href='/coming-soon'>
              <MuiLink sx={styles.link}>Coming Soon</MuiLink>
            </Link>
            <Link href='/contact'>
              <MuiLink sx={styles.link}>Contact</MuiLink>
            </Link>
            <Link href='/about-us'>
              <MuiLink sx={styles.link}>About Us</MuiLink>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={styles.image}>
        <Image
          src='/images/notFound.jpg'
          alt='Retro Cinemas'
          width={1}
          height={0.5}
          layout='responsive'
        />
      </Box>
    </Box>
  );
}

export { Navigation };

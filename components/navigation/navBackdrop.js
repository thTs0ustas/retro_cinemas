import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import styles from './styles';

// eslint-disable-next-line react/prop-types
export function NavBackdrop({ open, handleClose }) {
  return (
    <div>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.85) 100%)',
        }}
        open={open}
        onClick={handleClose}>
        <Box sx={{ textAlign: 'center' }}>
          <Link href='/now-playing'>
            <MuiLink
              sx={{
                ...styles.link,
                ...styles.bdropLink,
              }}>
              Now Playing
            </MuiLink>
          </Link>
          <Link href='/coming-soon'>
            <MuiLink
              sx={{
                ...styles.link,
                ...styles.bdropLink,
              }}>
              Coming Soon
            </MuiLink>
          </Link>
          <Link href='/contact'>
            <MuiLink
              sx={{
                ...styles.link,
                ...styles.bdropLink,
              }}>
              Contact
            </MuiLink>
          </Link>
          <Link href='/about-us'>
            <MuiLink
              sx={{
                ...styles.link,
                ...styles.bdropLink,
              }}>
              About Us
            </MuiLink>
          </Link>
        </Box>
      </Backdrop>
    </div>
  );
}

import Backdrop from '@mui/material/Backdrop';

import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import styles from './styles';

export function NavBackdrop({ open, handleClose }) {
  return (
    <div>
      <Backdrop sx={styles.backDrop} open={open} onClick={handleClose}>
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

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '../switch/switch';
import styles from './styles';

const TopHeaderBar = () => (
  <Box sx={styles.topHeaderBar}>
    <Switch />
    <ButtonGroup
      sx={styles.group}
      variant='text'
      color='primary'
      aria-label='signup'>
      <Button sx={styles.buttonMember}>Be a Member</Button>
      <Button sx={styles.buttonSignup}>Sign Up</Button>
    </ButtonGroup>
  </Box>
);

export { TopHeaderBar };

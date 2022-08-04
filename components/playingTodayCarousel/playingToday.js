import { Box, Typography } from '@mui/material';
import styles from './styles';

function PlayingTodayCarousel() {
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant='h2'>Playing Today</Typography>
      </Box>
      <Box sx={styles.carousel}>
        <Box sx={styles.card} />
        <Box sx={styles.card} />
        <Box sx={styles.card} />
        <Box sx={styles.card} />
        <Box sx={styles.card} />
        <Box sx={styles.card} />
      </Box>
    </Box>
  );
}

export { PlayingTodayCarousel };

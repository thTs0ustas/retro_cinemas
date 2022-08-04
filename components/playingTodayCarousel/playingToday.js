import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles';
import usePlayingToday from './usePlayingToday';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function PlayingTodayCarousel() {
  const {
    cards,
    theme,
    activeStep,
    maxSteps,
    handleNext,
    handleBack,
    handleStepChange,
  } = usePlayingToday();
  return (
    <Box sx={styles.container}>
      <Paper
        variant='outlined'
        square
        sx={{
          width: '100%',
          textAlign: 'center',
          bgcolor: '#6e0b24',
          border: 'none',
        }}>
        <Typography sx={styles.title} variant='h2'>
          Films showing today
        </Typography>
        <Typography sx={styles.desc} variant='body1'>
          See all films & session times
        </Typography>
      </Paper>
      <Box sx={styles.carousel}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {cards.map((step, index) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{ display: 'flex', justifyContent: 'space-around' }}>
              {Math.abs(activeStep - index) <= 2
                ? // eslint-disable-next-line react/no-array-index-key
                  step.map((_, indx) => <Box key={indx} sx={styles.card} />)
                : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export { PlayingTodayCarousel };

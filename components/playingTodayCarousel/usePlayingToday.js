import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { chunk } from 'lodash';
import { useState } from 'react';
import useSWR from 'swr';

const usePlayingToday = () => {
  const lg = useMediaQuery('(min-width: 1200px)');
  const md = useMediaQuery('(min-width: 600px)');

  const { data } = useSWR('/api/movies', url =>
    axios.get(url).then(res => res.data)
  );

  console.log(data);

  // eslint-disable-next-line no-nested-ternary
  const cards = chunk(Array(9).fill(null), lg ? 3 : md ? 2 : 1);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = cards.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return {
    cards,
    theme,
    activeStep,
    maxSteps,
    handleNext,
    handleBack,
    handleStepChange,
  };
};

export default usePlayingToday;
